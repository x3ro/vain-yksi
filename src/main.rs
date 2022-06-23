use std::{collections::HashMap, convert::Infallible, sync::Arc};

use tokio::sync::{mpsc, Mutex};
use warp::{Filter, Rejection, Reply, ws::Message};

mod handlers;
mod ws;

#[derive(Debug, Clone)]
pub struct Client {
    pub client_id: String,
    pub username: String,
    pub sender: Option<mpsc::UnboundedSender<std::result::Result<Message, warp::Error>>>,
}

#[derive(Debug, Clone)]
pub struct GameState {
    word_to_guess: Option<String>
}

#[derive(Debug, Clone)]
pub struct Game {
    pub game_id: String,
    pub game_state: GameState,
    pub clients: HashMap<String, Client>
}

#[derive(Debug, Clone)]
pub struct GameContainer {
    pub games_created: u32,
    pub live_games: HashMap<String, Game>
}

type Games = Arc<Mutex<GameContainer>>;
type Result<T> = std::result::Result<T, Rejection>;

#[tokio::main]
async fn main() {
    let game_container = GameContainer { games_created: 0, live_games: HashMap::new() };
    let games: Games = Arc::new(Mutex::new(game_container));

    println!("Configuring websocket routes");

    let routes =
        new_route(&games)
        .or(join_route(&games))
        .with(warp::cors().allow_any_origin());
    println!("Starting server");
    warp::serve(routes).run(([127, 0, 0, 1], 8000)).await;
}

fn with_games(games: Games) -> impl Filter<Extract = (Games,), Error = Infallible> + Clone {
    warp::any().map(move || games.clone())
}

fn new_route(games: &Games) -> impl Filter<Extract = impl Reply, Error = Rejection> + Clone {
    let ws_route = warp::path("ws");
    // ws/new/<username>
    let new_route = ws_route
        .and(warp::path("new"))
        .and(warp::path::param::<String>())
        .and(warp::path::end())
        .and(warp::ws())
        .and(with_games(games.clone()))
        .and_then(handlers::new_game_handler);

   new_route
}

fn join_route(games: &Games) -> impl Filter<Extract = impl Reply, Error = Rejection> + Clone {
    let ws_route = warp::path("ws");
    // ws/join/<session_id>/<username>
    let join_route = ws_route
        .and(warp::path("join"))
        .and(warp::path::param::<String>())
        .and(warp::path::param::<String>())
        .and(warp::path::end())
        .and(warp::ws())
        .and(with_games(games.clone()))
        .and_then(handlers::join_game_handler);

    join_route
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[tokio::test]
    async fn created_game_contains_client_with_given_name() {
        let game_container = GameContainer { games_created: 0, live_games: HashMap::new() };
        let games: Games = Arc::new(Mutex::new(game_container));

        let ws_filter = new_route(&games);

        warp::test::ws()
            .path("/ws/new/user1")
            .handshake(ws_filter)
            .await
            .expect("handshake");

        // TODO Can we do reading without lock?
        let current_games = games.lock().await;
        let game = current_games.live_games.get("1001").unwrap();
        let clients = game.clone().clients;
        for client in clients.values() {
            assert_eq!(client.username, "user1");
        }
    }

    #[tokio::test]
    async fn create_game_then_join_game_and_send_message() {
        let game_container = GameContainer { games_created: 0, live_games: HashMap::new() };
        let games: Games = Arc::new(Mutex::new(game_container));

        let host_ws_filter = new_route(&games);

        let mut host_client = warp::test::ws()
            .path("/ws/new/user1")
            .handshake(host_ws_filter)
            .await
            .expect("handshake");


        let client_ws_filter = join_route(&games);
        let mut player_client = warp::test::ws()
            .path("/ws/join/1001/user2")
            .handshake(client_ws_filter)
            .await
            .expect("handshake");

        host_client.send_text("hi from host").await;
        let msg = player_client.recv().await.expect("recv");
        assert_eq!(msg.to_str(), Ok("hi from host"));

        player_client.send_text("hi from player").await;
        let msg = host_client.recv().await.expect("recv");
        assert_eq!(msg.to_str(), Ok("hi from player"));
    }
}
