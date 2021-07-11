import Game from "./Game.js"
import GameView from "./GameView.js"

let game  = new Game();
let gameView = new GameView();
let tiles = document.querySelectorAll(".board-tiles")
tiles.forEach(tile); {
    tile.addventListener ("click", () =>  {
        onTileClick( tile.dataset.index);
    })
}         

function onTileClick ($){
    //do something
    game.makeMove(i)
    //change turn
    gameView.updateBoard(game);
}