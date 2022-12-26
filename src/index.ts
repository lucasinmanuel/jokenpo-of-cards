import MainMenu from "./components/MainMenu.js";
import StartGame from "./components/StartGame.js";

let game:HTMLElement | null = document.getElementById("game");

let startGame = new StartGame(null);

startGame.start(game)


