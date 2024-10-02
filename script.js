let tura = 1;
let pola = new Array(3);
for (let i = 0; i < pola.length; i++) {
    pola[i] = new Array(3);
}

pola[0][0] = document.querySelector("#p1");
pola[0][1] = document.querySelector("#p2");
pola[0][2] = document.querySelector("#p3");
pola[1][0] = document.querySelector("#p4");
pola[1][1] = document.querySelector("#p5");
pola[1][2] = document.querySelector("#p6");
pola[2][0] = document.querySelector("#p7");
pola[2][1] = document.querySelector("#p8");
pola[2][2] = document.querySelector("#p9");

let gameOver = false;

function klik(id) {
    if (gameOver) return;

    const element = document.querySelector("#" + id);

    if (element.innerHTML == "") {
        if (tura % 2 == 1) {
            element.innerHTML = "X";
        } else {
            element.innerHTML = "O";
        }
        element.classList.add("nonactiv");
        tura++;
        checkWin();
    } else {
        console.log("Cell already occupied");
    }
}

function checkWin() {
    let winner = null;

    for (let i = 0; i < 3; i++) {
        if (pola[i][0].innerHTML !== "" &&
            pola[i][0].innerHTML === pola[i][1].innerHTML &&
            pola[i][1].innerHTML === pola[i][2].innerHTML) {
            winner = pola[i][0].innerHTML;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (pola[0][i].innerHTML !== "" &&
            pola[0][i].innerHTML === pola[1][i].innerHTML &&
            pola[1][i].innerHTML === pola[2][i].innerHTML) {
            winner = pola[0][i].innerHTML;
        }
    }

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
        gameOver = true;
        disableBoard();
    }
}

function disableBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            pola[i][j].onclick = null;
        }
    }
}
