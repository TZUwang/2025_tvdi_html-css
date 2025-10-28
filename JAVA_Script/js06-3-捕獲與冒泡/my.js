let grandpa = document.getElementById("grandpa")
let father = document.getElementById("father")
let child = document.getElementById("child")
let bb = document.getElementById("bb")

grandpa.onclick = A
father.onclick = B
child.onclick = C
bb.onclick = D

function A() {
    grandpa.style.backgroundColor = "#ff3b3b79";
}
function B(e) {
    father.style.backgroundColor = "#fff53b79";
    e.stopPropagation()
}
function C(e) {
    child.style.backgroundColor = "#45ff3b79";
    e.stopPropagation()
}
function D(e) {
    bb.style.backgroundColor = "#3be2ff79";
    e.stopPropagation()
}

//JS寫法 對象.style.backgroundColor ="值";
//CSS寫法 對象{background-color:值;}
//stopPropagation() 功能在於阻止事件冒泡(停止事件傳播)