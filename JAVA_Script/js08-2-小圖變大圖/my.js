/*=========================  一個蘿蔔一個坑 =========================*/
for (let i = 1; i <= 6; i += 1) { 
    document.getElementById("s" + i).onclick = aaa; //當s1到s6按下時 都呼叫aaa 
}
function aaa() {
    for (let i = 1; i <= 6; i += 1){
        if (this.id == "s" + i) { document.getElementById("pic").src = `./img/00${i}.jpg` }; //當this.id等於s1到s6時 將pic的src更改為對應的圖片
    }
}


/*=========================  多個蘿蔔一個坑 =========================*/
// document.getElementById("s1").onclick = aaa;
// document.getElementById("s2").onclick = aaa;
// document.getElementById("s3").onclick = aaa;
// document.getElementById("s4").onclick = aaa;
// document.getElementById("s5").onclick = aaa;
// document.getElementById("s6").onclick = aaa;

// function aaa() {
//     if (this.id == "s1") { document.getElementById("pic").src = "./img/001.jpg"; }
//     if (this.id == "s2") { document.getElementById("pic").src = "./img/002.jpg"; }
//     if (this.id == "s3") { document.getElementById("pic").src = "./img/003.jpg"; }
//     if (this.id == "s4") { document.getElementById("pic").src = "./img/004.jpg"; }
//     if (this.id == "s5") { document.getElementById("pic").src = "./img/005.jpg"; }
//     if (this.id == "s6") { document.getElementById("pic").src = "./img/006.jpg"; }
// }



