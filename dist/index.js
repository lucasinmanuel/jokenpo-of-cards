import CreateGame from "./components/CreateGame.js";
let game = document.getElementById("game");
if (game != null) {
    let createGame = new CreateGame(["rock", "paper", "scissors"], "default", "png");
    createGame.load(game);
    createGame.start();
}
