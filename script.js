const container = document.querySelector('.container');

const screen = document.querySelector('.screen');

//display on screen 
let screenContent = "";
function display_key(key){
    screenContent += key;
    screen.textContent = screenContent;
}

//clear screen 
function clearScreen(){
    screen.textContent = "";
}

//operations
function add(a,b){
    return a+b;
}

function subtruct(a,b){
    return a-b
}

function multiply(){
    return a*b
}

function divide(a,b){
    return a/b
}
