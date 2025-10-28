//將執行相同的程式碼包裝成函式
function changeColor(text, color) { //接收多個參數
    document.getElementById("tt").innerHTML = text;
    document.getElementById("pic").src = `./img/g0${color}.jpg`;
}