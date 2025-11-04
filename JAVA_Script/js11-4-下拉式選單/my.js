//迴圈方式製作下拉式選單
for (let i = 1; i <= 5; i += 1) {
    document.getElementById("menu" + i).onmouseover = function () {
        A("block", i)
    }
    document.getElementById("menu" + i).onmouseout = function () {
        A("none", i)
    }
}

function A(X, Y) {
    document.getElementById("submenu"+ Y).style.cssText = "display:" + X 
}