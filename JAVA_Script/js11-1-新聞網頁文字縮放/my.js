//按鈕每按一次 字體縮放一次
//cssText 可以套用多種屬性 除了改變大小也可以顏色等等
let tt = document.getElementById("tt")
let N = 16

document.getElementById("iconL").onclick = LL
document.getElementById("iconM").onclick = MM
document.getElementById("iconS").onclick = SS

function LL() {
    N += 1
    tt.style.cssText = "font-size:" + N + "px; color:red;";
}
function MM() {
    N = 16
    tt.style.cssText = "font-size:" + N + "px; color:blue;";
}
function SS() {
    N -= 1
    tt.style.cssText = "font-size:" + N + "px; color:green;";
}