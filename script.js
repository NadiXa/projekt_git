let tura = 1;
let pola = new Array(3);
for (let i = 0; i < pola.length; i++) {
    pola[i] = new Array(3);  // Initialize each row as an array
}

// Map the grid (pola) to the HTML div elements by their IDs
pola[0][0] = document.querySelector("#p1");
pola[0][1] = document.querySelector("#p2");
pola[0][2] = document.querySelector("#p3");
pola[1][0] = document.querySelector("#p4");
pola[1][1] = document.querySelector("#p5");
pola[1][2] = document.querySelector("#p6");
pola[2][0] = document.querySelector("#p7");
pola[2][1] = document.querySelector("#p8");
pola[2][2] = document.querySelector("#p9");

let gameOver = false;  // Variable to track if the game is over

function klik(id) {
    if (gameOver) return;  // Prevent further moves if the game is over

    const element = document.querySelector("#" + id);

    // Check if the clicked cell is empty
    if (element.innerHTML == "") {
        if (tura % 2 == 1) {
            element.innerHTML = "X";  // Player 1 is 'X'
        } else {
            element.innerHTML = "O";  // Player 2 is 'O'
        }
        element.classList.add("nonactiv");  // Mark as non-active to prevent further clicking
        tura++;
        checkWin();  // Check for a winning condition after each move
    } else {
        console.log("Cell already occupied");
    }
}

function checkWin() {
    let winner = null;

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (pola[i][0].innerHTML !== "" &&
            pola[i][0].innerHTML === pola[i][1].innerHTML &&
            pola[i][1].innerHTML === pola[i][2].innerHTML) {
            winner = pola[i][0].innerHTML;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (pola[0][i].innerHTML !== "" &&
            pola[0][i].innerHTML === pola[1][i].innerHTML &&
            pola[1][i].innerHTML === pola[2][i].innerHTML) {
            winner = pola[0][i].innerHTML;
        }
    }

    // Check diagonals
    if (pola[0][0].innerHTML !== "" &&
        pola[0][0].innerHTML === pola[1][1].innerHTML &&
        pola[1][1].innerHTML === pola[2][2].innerHTML) {
        winner = pola[0][0].innerHTML;
    }

    if (pola[0][2].innerHTML !== "" &&
        pola[0][2].innerHTML === pola[1][1].innerHTML &&
        pola[1][1].innerHTML === pola[2][0].innerHTML) {
        winner = pola[0][2].innerHTML;
    }

    if (winner) {
        console.log("Player " + winner + " wins!");
        gameOver = true;  // Set the game as over to stop further clicks
        disableBoard();  // Disable further interaction with the board
    }
}

function disableBoard() {
    // Disable clicking on all cells by removing their onclick handlers
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            pola[i][j].onclick = null;  // Remove the onclick event
        }
    }
}
