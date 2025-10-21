//JS同時宣告多個變數用逗號隔開 最後結尾使用分號
let tt = document.getElementById("tt"),
    PIC = document.getElementById("pic"),
    icon1 = document.getElementById("icon1"),
    icon2 = document.getElementById("icon2");


function AAA() {
    PIC.src = "./img/g01.jpg";
    tt.innerHTML = "芥末綠";
}
function BBB() {
    PIC.src = "./img/g02.jpg";
    tt.innerHTML = "珊瑚粉";
}

icon1.onclick = AAA;
icon2.onclick = BBB;