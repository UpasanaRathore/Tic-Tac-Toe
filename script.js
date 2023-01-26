console.log("Welcome to Tic-Tac-Toe");
let audioTurn = new Audio("/ding.mp3");
let gameOver = new Audio("/gameover.mp3");
let turn = 'X';
let isGameOver = false;
let xpoints = 0;
let opoints = 0;

const changeTurn = ()=>{
    return turn === 'X'? 'O':"X";
}

//function to check for a win//
const checkWin = ()=>{
    let count = 0;
let boxTexts = document.getElementsByClassName("boxItem");
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
wins.forEach(e =>{
if( (boxTexts[e[0]].innerText === boxTexts[e[1]].innerText)  && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText !== "" )
{
    if(boxTexts[e[0]].innerText === 'X')
    {
        xpoints += 1;
    }
    if(boxTexts[e[0]].innerText === 'O')
    {
        opoints += 1;
    }
    document.getElementsByClassName("playerInfo")[0].innerText = "Player " + boxTexts[e[0]].innerText + " WON";
    document.getElementById("x-points").innerText = xpoints;
    document.getElementById("o-points").innerText = opoints;
    gameOver.play();
    boxTexts[e[0]].style.color = "rgb(29, 196, 104)";
    boxTexts[e[1]].style.color = "rgb(29, 196, 104)";
    boxTexts[e[2]].style.color = "rgb(29, 196, 104)";
    isGameOver = true;
}
})

//logic of game draw//
if(isGameOver == false){
let boxText = Array.from(document.querySelectorAll(".boxItem"));
boxText.forEach(element=>{
    if(element.innerText  !== ''){
        count += 1;
    }
});
if(count == 9){
gameOver.play();
isGameOver = true;
document.getElementsByClassName("playerInfo")[0].innerText = "GAME DRAW";
}
}
}

//Game Logic//
let boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach((element)=>{
    let boxText = element.querySelector(".boxItem")
    element.addEventListener("click", ()=> {
    if(boxText.innerText === '')
   {
    boxText.innerText = turn;
    turn = changeTurn();
    audioTurn.play();
    checkWin();
    if(isGameOver == false){
    document.getElementsByClassName("playerInfo")[0].innerText = "Turn For Player - " + turn;
    }
   }
})
})

//Add event listener to reset//
let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxText = Array.from(document.querySelectorAll(".boxItem"));
    boxText.forEach(element =>{
        element.innerText = " ";
        element.style.color = "rgb(45, 219, 211)";
    });
    turn = 'X';
    xpoints = 0;
    opoints = 0;
    document.getElementsByClassName("playerInfo")[0].innerText = "Turn For Player - " + turn;
    document.getElementById("x-points").innerText = xpoints;
    document.getElementById("o-points").innerText = opoints;
    isGameOver = false;
})

//Add event listener to playAgain//
let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click",()=>{
    let boxText = Array.from(document.querySelectorAll(".boxItem"));
    boxText.forEach(element =>{
        element.innerText = " ";
        element.style.color = "rgb(45, 219, 211)";
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName("playerInfo")[0].innerText = "Turn For Player - " + turn;
})
