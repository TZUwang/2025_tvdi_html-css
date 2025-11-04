let pic = document.getElementById("pic")
let tt = document.getElementById("tt")

document.getElementById("btn1").onclick = function () {
    A("red", "red")
}
document.getElementById("btn2").onclick = function () {
    A("green", "green")
}
document.getElementById("btn3").onclick = function () {
    A("blue", "blue")
}

function A(a, b) {
    pic.src = `./img/${a}.jpg`
    tt.style.cssText = `color:${b};`
}