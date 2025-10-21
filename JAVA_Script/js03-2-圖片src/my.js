//宣告一個函式 等需要執行時再呼叫 沒有呼叫就不執行
function QQQ() {
    let PIC = document.getElementById("pic")
//宣告一個變數PIC
PIC.src = "./img/kiwi3.jpg"
//變數PIC的src屬性將更改為./img/kiwi3.jpg 後顯示在網頁上
}

//按下按鈕呼叫函式 寫在外部連結js檔中QQQ不要加()
document.getElementById("btn").onclick = QQQ