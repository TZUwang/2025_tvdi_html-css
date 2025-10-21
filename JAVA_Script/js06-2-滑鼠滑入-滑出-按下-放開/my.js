let PIC = document.getElementById("pic")

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
    this.src = "./img/p3.png"
}
function D() {
    this.src = "./img/p2.png"
}