//# 在 JavaScript 的 querySelector 和 querySelectorAll 方法中，是一個 CSS ID 選擇器。它的作用是選取 HTML 文件中具有特定 id 屬性的元素
let SMALL = document.querySelectorAll("#BOX img")
let BIG = document.querySelector("#pic")

//利用forEach每一個元素都會傳出item與index 
// => 箭頭函式
SMALL.forEach((x, y) => { //x是每個小圖(元素) y是每個小圖的編號(索引值)
    x.onclick = () => A(y) //為了傳參數執行A函式 需要一個匿名函式
})

function A(n) {
    n += 1
    BIG.src = `./img/00${n}.jpg`
}