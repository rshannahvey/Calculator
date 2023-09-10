
let a = document.getElementById("disp");

function allcr() {
    a.value = '';
}
function del() {
    a.value = a.value.toString().slice(0,-1);
}
function dot() {
    a.value+='.';
}
function divide() {
    a.value+='/';
}
function sev() {
    a.value+='7';
}
function eig() {
    a.value+='8';
}
function nin() {
    a.value+='9';
}
function mul() {
    a.value+='*';
}
function four() {
    a.value+='4';
}
function five() {
    a.value+='5';
}
function six() {
    a.value+='6';
}
function diff() {
    a.value+='-';
}
function one() {
    a.value+='1';
}
function two() {
    a.value+='2';
}
function three() {
    a.value+='3';
}
function add() {
    a.value+='+';
}
function dblz() {
    a.value+='00';
}
function zero() {
    a.value+='0';
}
function equ() {
    a.value = eval(a.value);
}