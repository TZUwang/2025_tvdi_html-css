let tt = document.getElementById("tt")
let X = (3 * 4 + 2) % 5
console.log(X) //網頁只執行最後結果 若想看過程按F12使用控制台
tt.innerHTML = X

X = X + 1

console.log(X)
tt.innerHTML = X

let y = 8 == 9
console.log(y)

//prompt進來的資料為「字串」，如果沒有parseInt，則為「字串與字串相加」
let A = parseInt(prompt("輸入第一個數字")) //parseInt將()內的轉成整數
let B = parseInt(prompt("輸入第二個數字"))
let C = A + B 
document.getElementById("ss").innerHTML = "總和是:" + C + "元" //JS可以將字串與數字相加


