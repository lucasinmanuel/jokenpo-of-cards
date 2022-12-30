import CreateGame from "./components/CreateGame.js";

let game:HTMLElement | null = document.getElementById("game");

if(game != null){
    let createGame = new CreateGame(["rock","paper","scissors"],"default","png");
    createGame.load(game)
    createGame.start()
}


