let Z = 12 //Z是要共用的變數 所以寫在外面作為全域變數
document.getElementById("num").innerHTML = Z //將Z的值顯示在網頁

document.getElementById("add").onclick = A //onclick按下按鈕呼叫A函式
function A() {
    Z += 1
    document.getElementById("num").innerHTML = Z 
}

document.getElementById("minus").onclick = B //onclick按下按鈕呼叫B函式
function B() {
    Z -= 1
    document.getElementById("num").innerHTML = Z
}


// if let Z = 12寫在function裡面 每次執行都會從12開始計算+1與-1 值會固定在11與13