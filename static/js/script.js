/* ================================
   ME GUSTA
================================ */

let like = document.querySelector("#like")
let boton = document.querySelector("#likesin")

let contadorLike = 400

boton.addEventListener("click", function () {

    contadorLike = contadorLike + 1

    like.innerText = contadorLike

})


/* ================================
   NO ME GUSTA
================================ */

let likeson = document.querySelector("#dislike")
let boton1 = document.querySelector("#dislikesin")

let contadorDislike = 120

boton1.addEventListener("click", function () {

    contadorDislike = contadorDislike + 1

    likeson.innerText = contadorDislike

})


/* ================================
   SUSCRIBIRSE
================================ */

const botonn = document.querySelector("#Suscribirse")
const mass = document.querySelector("#suscripcion")

let contadorr = 1200000
let suscrito = false


botonn.addEventListener("click", function () {

    if (suscrito == false) {

        suscrito = true

        contadorr = contadorr + 1

        botonn.innerText = "Suscrito"

        botonn.style.backgroundColor = "#b5bbb8"
        botonn.style.color = "black"

        mass.innerText =
            (contadorr / 1000000).toFixed(1) +
            " M de suscriptores"

    }

    else {

        suscrito = false

        contadorr = contadorr - 1

        botonn.innerText = "Suscribirse"

        botonn.style.backgroundColor = "#f44343"
        botonn.style.color = "white"

        mass.innerText =
            (contadorr / 1000000).toFixed(1) +
            " M de suscriptores"

    }

})


/* ================================
   AÑADIR A LA COLA
================================ */

const añadir_cola =
    document.querySelector("#añadirr")

añadir_cola.addEventListener("click", function () {

    alert("Video añadido a la cola")

})


const añadir_colaa =
    document.querySelector("#añadirr1")

añadir_colaa.addEventListener("click", function () {

    alert("Video añadido a la cola")

})


const añadir_colaaa =
    document.querySelector("#añadirr2")

añadir_colaaa.addEventListener("click", function () {

    alert("Video añadido a la cola")

})


/* ================================
   AÑADIR OTROS BOTONES +
================================ */

const botonesMas =
    document.querySelectorAll(".btn-ver-mas")


for (let i = 0; i < botonesMas.length; i++) {

    botonesMas[i].addEventListener("click", function () {

        alert("Video añadido a la cola")

    })

}


/* ================================
   VIDEO AL PASAR EL MOUSE
================================ */

const explorando =
    document.querySelector("#explorando_lapatagonia")


explorando.addEventListener("mouseover", function () {

    explorando.play()

})


explorando.addEventListener("mouseout", function () {

    explorando.pause()

    explorando.currentTime = 0

})



/* VIDEO COMIDA */

const comida =
    document.querySelector("#comidaVideo")


comida.addEventListener("mouseover", function () {

    comida.play()

})


comida.addEventListener("mouseout", function () {

    comida.pause()

    comida.currentTime = 0

})



/* VIDEO CIUDADES */

const ciudades =
    document.querySelector("#ciudadesVideo")


ciudades.addEventListener("mouseover", function () {

    ciudades.play()

})


ciudades.addEventListener("mouseout", function () {

    ciudades.pause()

    ciudades.currentTime = 0

})



/* VIDEO TREKKING */

const trekking =
    document.querySelector("#trekkingVideo")


trekking.addEventListener("mouseover", function () {

    trekking.play()

})


trekking.addEventListener("mouseout", function () {

    trekking.pause()

    trekking.currentTime = 0

})


/* ================================
   LIMPIAR COLA
================================ */

const limpiar =
    document.querySelector("#limpiarCola")


const videosCola =
    document.querySelectorAll(".video-item")


limpiar.addEventListener("click", function () {

    for (let i = 0; i < videosCola.length; i++) {

        videosCola[i].style.display = "none"

    }

})


/* ================================
   ELIMINAR VIDEO DE LA COLA
================================ */

const eliminar =
    document.querySelectorAll(".video-item > button")


for (let i = 0; i < eliminar.length; i++) {

    eliminar[i].addEventListener("click", function () {

        eliminar[i].parentElement.style.display = "none"

    })

}
