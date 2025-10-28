let PIC = document.getElementById("pic")
let tt = document.getElementById("tt")
let X = 0
let audio = document.createElement("audio") //創造一個audio元素

PIC.onmouseover = A //onmouseover滑鼠滑入
PIC.onmouseout = B //onmouseout滑鼠滑出
PIC.onmousedown = C //onmousedown滑鼠按下
PIC.onmouseup = D //onmouseup滑鼠放開

function A() {
    this.src = "./img/p2.png" //當函式被呼叫時，this對象指向PIC元素
}
function B() {
    this.src = "./img/p1.png"
}
function C() {
    this.src = "./img/p3.png";
    playaudio() //執行C function時呼叫playaudio function
}
function D() {
    this.src = "./img/p2.png"
}

PIC.onclick = function () {
    X += 1
    tt.innerHTML = X //innerHTML屬性將X的值顯示在網頁
}

function playaudio() {
    audio.src = "./a.mp3"; 
    audio.play(); //播放
}