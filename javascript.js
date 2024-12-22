let arr = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let p1 = true;
let p2 = false;
let ch = 'X';
let p1Name;
let p2Name;
let dark = sessionStorage.getItem("darkmode");
let element = document.body;
let icon = document.querySelector("#icon");

function darkmode() {

    element.classList.toggle('darkmode');

    if (element.classList.contains("darkmode")) {
        sessionStorage.setItem("darkmode", "active");
        icon.src = "LightMode.png";
    }

    else {
        sessionStorage.setItem("darkmode", null);
        icon.src = "DarkMode.png";
    }
}

function onload() {
    if (dark === "active") {
        element.classList.toggle("darkmode", true);
        icon.src = "LightMode.png";
    }
}

document.querySelector(".menu").addEventListener("click", noti);

function noti() {
    document.querySelector(".navbar").classList.toggle("active");
}

document.querySelector(".container").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("active", false);
})

function getPName() {
    p1Name = document.querySelector("#p1").value;
    sessionStorage.setItem("p1", p1Name);
    p2Name = document.querySelector("#p2").value;
    sessionStorage.setItem("p2", p2Name);
}

p1Name = sessionStorage.getItem("p1");
p2Name = sessionStorage.getItem("p2");

let playerBoard = document.getElementById("player");
if (playerBoard) {
    playerBoard.innerHTML = p1Name + " Your Turn!";
}

function isHori(row, ch) {
    for (let c = 0; c < arr[row].length; c++) {
        if (arr[row][c] != ch) {
            return false;
        }
    }
    return true;
}

function isVerti(col, ch) {
    for (let r = 0; r < arr.length; r++) {
        if (arr[r][col] != ch) {
            return false;
        }
    }
    return true;
}

function isMain(ch) {
    for (let r = 0; r < arr.length; r++) {
        if (arr[r][r] != ch) {
            return false;
        }
    }
    return true;
}

function isOther(ch) {
    let col = arr.length - 1;
    for (let r = 0; r < arr.length; r++) {
        if (arr[r][col - r] != ch) {
            return false;
        }
    }
    return true;
}

function isWin(row, col, ch) {
    return isHori(row, ch) || isVerti(col, ch) || isMain(ch) || isOther(ch);
}

function isGameOver() {
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            if (arr[r][c] == " ") {
                return false;
            }
        }
    }
    return true;
}

function insert(row, col, id) {
    let cell = document.getElementById(id);

    cell.innerHTML = ch;
    arr[row][col] = ch;
    cell.disabled = true;

    let win = isWin(row, col, ch);
    let gameOver = isGameOver();

    if (win) {
        if (ch == 'X') {
            alert(sessionStorage.getItem("p1") + " Win");
            gameOver = false;
        }

        else {
            alert(sessionStorage.getItem("p2") + " Win");
            gameOver = false;
        }

        let list = document.querySelectorAll("button");
        console.log(list);

        for (let i = 0; i < list.length; i++) {
            list[i].disabled = true;
        }
    }

    if (gameOver) {
        alert("Game Over");
    }

    if (p1 == true) {
        p1 = false;
        p2 = true;
        ch = 'O';
    }
    else {
        p1 = true;
        p2 = false;
        ch = 'X';
    }

    if (p1) {
        playerBoard.innerHTML = p1Name + " Your Turn!";
    }

    else {
        playerBoard.innerHTML = p2Name + " Your Turn!";
    }
}


function restart() {
    let list = document.querySelectorAll("button");

    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = "";
        list[i].disabled = false;
    }

    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            arr[r][c] = " ";
        }
    }

    playerBoard.innerHTML = p1Name + " Your Turn!";
    p1 = true;
    p2 = false;
    ch = "X";
}










