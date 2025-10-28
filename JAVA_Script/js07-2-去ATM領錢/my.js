let money = parseInt(prompt("請輸入提款金額"))
let tt = document.getElementById("tt")

function money1() {
    if (money < 1000) {
        tt.innerHTML = "無法提款"
    }
    else if (money > 30000) {
        tt.innerHTML = "已達提款上限"
    }
    else {
        tt.innerHTML = "您提款" + money + "元"
    }
}
money1()

/* 多個判斷式 範圍內會同時執行
let money = parseInt(prompt("請輸入提款金額"))

if (money < 1000) {
    document.getElementById("tt").innerHTML = "1000元以下"
    console.log("1000元以下")
}
if (money <= 10000) {
    document.getElementById("tt").innerHTML = "1000-1萬"
    console.log("1000-1萬")
}
if (money <= 30000) {
    document.getElementById("tt").innerHTML = "1萬-3萬"
    console.log("1萬-3萬")
}
if (money > 30000) {
    document.getElementById("tt").innerHTML = "3萬以上"
    console.log("3萬以上")
}
*/