document.getElementById("s1").addEventListener("click", A)
//addEventListener是一個事件監聽器 事件名稱為click 呼叫A函式
document.getElementById("s2").onclick = B
document.getElementById("s3").onclick = C
document.getElementById("s4").onclick = D
document.getElementById("s5").onclick = E
document.getElementById("s6").onclick = F

let PIC = document.getElementById("pic")
function A() {
    PIC.src = "./img/001.jpg"
}
function B() {
    PIC.src = "./img/002.jpg"
}
function C() {
    PIC.src = "./img/003.jpg"
}
function D() {
    PIC.src = "./img/004.jpg"
}
function E() {
    PIC.src = "./img/005.jpg"
}
function F() {
    PIC.src = "./img/006.jpg"
}