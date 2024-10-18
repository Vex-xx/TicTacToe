let arr = [[" "," "," "],[" "," "," "],[" "," "," "]];
let p1 = true;
let p2 = false;
let ch = 'X'; 
let p1Name;
let p2Name;

document.querySelector(".menu").addEventListener("click",noti);

function noti (){
    document.querySelector(".navbar").classList.toggle("active");
}

function getPName(){    
    p1Name = document.querySelector("#p1").value;        
    sessionStorage.setItem("p1",p1Name);
    p2Name = document.querySelector("#p2").value;
    sessionStorage.setItem("p2",p2Name);
}

p1Name = sessionStorage.getItem("p1");
p2Name = sessionStorage.getItem("p2");
console.log(p2Name);

let playerBoard = document.getElementById("player");
playerBoard.innerHTML = p1Name + " Your Turn!";

document.querySelector(".boardContainer").addEventListener("click",function (){
    document.querySelector(".navbar").classList.toggle("active",false);
})

function isHori(row,ch){
    for(let c = 0; c < arr[row].length; c++)
    {
        if(arr[row][c] != ch)
        {
            return false;
        }
    }
    return true;
}

function isVerti(col,ch){
    for(let r = 0; r < arr.length; r++)
    {
        if(arr[r][col] != ch)
        {
            return false;
        }
    }
    return true;
}

function isMain(ch){
    for(let r = 0; r < arr.length; r++)
    {
        if(arr[r][r] != ch)
        {
            return false;
        }
    }
    return true;
}

function isOther(ch){
    let col = arr.length - 1;
    for(let r = 0; r < arr.length; r++)
    {
        if(arr[r][col - r] != ch)
        {
            return false;
        }
    }
    return true;
}

function isWin(row,col,ch){
    return isHori(row,ch) || isVerti(col,ch) || isMain(ch) || isOther(ch);
}

function isGameOver(){
    for(let r = 0; r < arr.length; r++)
    {
        for(let c = 0; c < arr[r].length; c++)
        {
            if(arr[r][c] == " ")
            {
                return false;
            }
        }
    }
    return true;
}

function insert (row,col,id){
    let cell = document.getElementById(id);

    cell.innerHTML = ch;
    arr[row][col] = ch;
    cell.disabled = true;

    let win = isWin(row,col,ch);
    let gameOver = isGameOver();

    if(win)
    {
        if(ch == 'X')
        {
            alert(sessionStorage.getItem("p1") + " Win");
            gameOver = false;
        }

        else
        {
            alert(sessionStorage.getItem("p2") + " Win");
            gameOver = false;
        }
    }

    if(gameOver) {        
        alert("Game Over");
    }

    if(p1 == true){
        p1 = false;
        p2 = true;
        ch = 'O';
    }
    else
    {
        p1 = true;
        p2 = false;
        ch = 'X';
    }

    if(p1)
    {
        playerBoard.innerHTML = p1Name + " Your Turn!";
    }
    
    else
    {
        playerBoard.innerHTML = p2Name + " Your Turn!";
    }
}


function restart (){
    let list = document.querySelectorAll("button");
    console.log(list);


    for(let i = 0; i < list.length; i++)
    {
        list[i].innerHTML = "";
        list[i].disabled = false;
    }

    for(let r = 0; r < arr.length; r++)
    {
        for(let c = 0; c < arr[r].length; c++)
        {
            arr[r][c] = " ";
        }
    }    

    playerBoard.innerHTML = p1Name + " Your Turn!";
    p1 = true;
    p2 = false;
    ch = "X";
}

function lightDark (){
    let icon = document.querySelectorAll("i");

    icon[1].classList.toggle("lightIcon");
    icon[2].classList.toggle("darkIcon");
    
    document.querySelector(".container").classList.toggle("darkTheme");
    document.querySelector(".head").classList.toggle("darkTheme");
    document.querySelector(".head").classList.toggle("textWhite");
    document.querySelector(".btnContainer").classList.toggle("darkBtn");
    document.querySelector(".navContainer").classList.toggle("darkNav");
}

function lightDark2 (){
    let icon = document.querySelectorAll("i");

    icon[1].classList.toggle("lightIcon");
    icon[2].classList.toggle("darkIcon");

    document.querySelector(".navContainer").classList.toggle("darkNav");
    document.querySelector(".boardContainer").classList.toggle("darkTheme");
    document.querySelector(".board").classList.toggle("darkBoard");
    document.querySelector("#player").classList.toggle("textWhite");
}








