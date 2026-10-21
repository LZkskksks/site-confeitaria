let indice = 0
let imagens = [
    "imgs/bolo1.webp",
    "imgs/bolo2.jpg",
    "imgs/bolo3.jpg",
    "imgs/bolo4.webp"

]
function trocar(){
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

setInterval(function(){
    trocar()
    indice++

    if (indice >= imagens.length){
        indice = 0
    }
}, 2000)

    