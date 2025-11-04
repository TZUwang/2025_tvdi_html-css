let menu = document.querySelectorAll(".menu")
let submenu = document.querySelectorAll(".submenu")

//利用forEach將每個menu加上滑鼠滑入-滑出事件
menu.forEach((x, Y) => {
    x.onmouseover = function () { A(Y, "block") }
    x.onmouseout = function () { A(Y, "none") }
})

//依照索引值顯示或隱藏
function A(N, K) {
    submenu[N].style.cssText = `display:${K}`
}