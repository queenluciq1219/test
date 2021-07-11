export default class GameView {

   constructor () {
        console.log ("init game");
    }
    updateBoard(game){
        console.log("this is a board within GameView");
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector( `.board-tile[data-index= "${i}"]`);
             tile.textContent = game.Board[i];
        }
    }
}                            