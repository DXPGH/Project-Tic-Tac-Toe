// Setting up the gameBoard module
let gameBoardModule = (() => {
    let gameBoard = ["X"];
    return {gameBoard};
})();

// Setting up the displayController module
let displayControllerModule = (() => {
    const makeMove = document.querySelectorAll(".game-board-button");

    // Start indexing and looping through each button node
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            // Start indexing and looping through each grid box node
            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                // Render clicked play on the correct grid box and display
                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length -1];
                    console.log("show me my makeMoves linked button value...", makeMoves.dataset.linkedButton);
                    console.log("show me my gridBox linked button value...", gridBox.dataset.linkedButton);
                }
                index++;
            })
        }
        index++
    })
})();

// Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {playerName;
    console.log("This is the name of player " + playerNumber + "....." + playerName);}
    return {getPlayerName, playerName, playerNumber, assignedXO};
};



let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");
renderArrayToScreenModule;