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
    screenContent = ""
    screen.textContent = screenContent;
}

//operations
function add(a,b){
    return a+b;
}

function subtruct(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}


function operate(){
    const input = screenContent;
    const match = input.match(/(\d+)([+\-x÷])(\d+)/);

    if (!match) {
        screen.textContent = "Invalid input!";
        return;
    }

    const a = parseFloat(match[1]);
    const operator = match[2];
    const b = parseFloat(match[3]);


    switch(operator){
        case '+':
            screenContent = add(a,b);
            break;

        case '-':
            screenContent = subtruct(a,b);
            break;

        case 'x':
            screenContent = multiply(a,b);
            break;

        case '÷':
            screenContent = divide(a,b);
            break;
        default:
            screen.textContent = "Operation not in cali!"
    }
    screen.textContent = screenContent;
}
