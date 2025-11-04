document.getElementById("icon1").onclick = function () { change(2, 2, "box", "xxx") }
document.getElementById("icon2").onclick = function () { change(1, 1, "xxx", "box") }


function change(a, b, old0, new0 ) {
    document.body.style.cssText = `background-image: url(./img/bg${a}.png)`
    document.getElementById("photo").src = `./img/photo${b}.jpg`
    for (let i = 1; i <= 6; i++) {
        document.getElementById("box" + i).classList.replace(old0, new0)
    }
}

//利用classList.replace(舊的class, 新的class)更改class來置換
//將相同功能的function封裝 利用傳入參數來更改
//利用for迴圈更改所有class
//利用``字串差補 插入變數