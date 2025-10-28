let icon = document.getElementById("icon")
let menu = document.getElementById("menu")
document.body.onclick = A

icon.onclick = function (e) {
    menu.style.display = "block";//block不是js的指令所以要用字串
    //display = "block"除了製作新的盒子外,也可以用來顯示隱藏的元素
    e.stopPropagation()
}

function A(e) {
    menu.style.display = "none";
    e.stopPropagation()
}