//onclick寫在外部連結js檔中不要加()

let tt = document.getElementById("tt"),
    pic = document.getElementById("pic"),
    icon1 = document.getElementById("icon1"),
    icon2 = document.getElementById("icon2")

function AAA(x, y) {
    tt.innerHTML = x;
    pic.src = `./img/g0${y}.jpg`;
}

//用偵聽器監聽的方式 但js不用加() 所以要再用一個函式包住接收參數
icon1.addEventListener("click", function () {
    AAA("芥末綠", 1);
});

icon2.addEventListener("click", function () {
    AAA("珊瑚粉", 2);
});




