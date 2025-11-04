//手機隱藏式選單 cssText內的寫法與css一樣
//相同功能的function不要重複出現
//需要將一個帶有參數的函式呼叫指派給一個事件處理器 必須用一個匿名函式或是一個已命名的函式將它包裝起來 確保您的函式是在事件發生時才被執行，而不是在程式碼載入時就執行
document.getElementById("icon").onclick = function () {
    A("block")
}
document.getElementById("close").onclick = function () {
    A("none")
}
let menu = document.getElementById("menu")


function A(a) {
    menu.style.cssText = `display:${a}`
}