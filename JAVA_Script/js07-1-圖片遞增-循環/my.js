let N = 1
let cake = document.getElementById("cake")

cake.onclick = A

function A() {
    if (N == 6) {
        N = 1
    }
    else {
        N += 1
    }
    cake.src = "./img/photo" + N + ".jpg"
}

