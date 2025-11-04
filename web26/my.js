let BTN = document.querySelector(".menuicon")
let close = document.querySelector(".close")
let menu = document.querySelector(".header ul")

BTN.onclick = function () {
    menu.style.cssText = "display: block;"
}
close.onclick = function () {
    menu.style.cssText = "display: none;"
}

window.onresize = function () {
    if (window.innerWidth > 768) {
        menu.style.cssText = "display: block;"
    } else {
        menu.style.cssText = "display: none;"
    }
}