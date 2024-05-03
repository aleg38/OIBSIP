let textInputEl = document.getElementById("display");


function btn1() {
    textInputEl.value += 1;
}

function btn2() {
    textInputEl.value += 2;
}

function btn3() {
    textInputEl.value += 3;
}

function btnPlus() {
    textInputEl.value += "+";
}

function btn4() {
    textInputEl.value += 4;
}

function btn5() {
    textInputEl.value += 5;
}

function btn6() {
    textInputEl.value += 6;
}

function btnMinus() {
    textInputEl.value += "-";
}

function btn7() {
    textInputEl.value += 7;
}

function btn8() {
    textInputEl.value += 8;
}

function btn9() {
    textInputEl.value += 9;
}

function btnMultiply() {
    textInputEl.value += "*";
}

function btnC() {
    textInputEl.value = "";
}

function btn0() {
    textInputEl.value += 0;
}

function btnEqual() {
    textInputEl.value = eval(textInputEl.value);
}

function btnDivide() {
    textInputEl.value += "/";
}
