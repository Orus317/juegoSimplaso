var resultado
// var mapa = "tile.webp"
var vp = document.getElementById("villaplatzi")
var papel = vp.getContext("2d")
let posicionesVacas_x = []
let posicionesVacas_y = []
let posicionesPollos_x = []
let posicionesPollos_y = []
let rememberVacas = []

var fondo = {
    url: "tile.webp",
    cargaOK: false,
    imagen : new Image()
}
var vaca = {
    url: "vaca.png",
    cargaOK: false,
    imagen: new Image()
}
var pollo = {
    url: "pollo.png",
    cargarOK: false,
    imagen: new Image()
}

fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos)


function cargarFondo(){
    fondo.cargaOK = true
    dibujar()
}
function cargarVacas(){
    vaca.cargaOK = true
    dibujar()
}
function cargarPollos(){
    pollo.cargarOK=true
    dibujar()
}

let x_vaca
let y_vaca
let x_pollo
let y_pollo

function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen,0,0)
    }
    if(vaca.cargaOK){
        numeroVacas = aleatorio(1,5)
        rememberVacas.push(numeroVacas)
        console.log(`El número de vacas es ${numeroVacas}`)
        for(i=1;i<=numeroVacas;i++){
            x_vaca = aleatorio(0,5)
            y_vaca = aleatorio(0,5)
            x_vaca = x_vaca*75
            y_vaca = y_vaca*75
            papel.drawImage(vaca.imagen,x_vaca,y_vaca)
            posicionesVacas_x.push(x_vaca)
            posicionesVacas_y.push(y_vaca)
        }
    }
    if(pollo.cargarOK){
        numeroPollos = aleatorio(1,3)
        console.log(`El número de pollos es ${numeroPollos}`)
        for(i=1;i<=numeroPollos;i++){
            x_pollo = aleatorio(0, 4)
            y_pollo = aleatorio(0, 4)
            x_pollo = x_pollo*100
            y_pollo = y_pollo*100
            papel.drawImage(pollo.imagen,x_pollo,y_pollo)
            posicionesPollos_x.push(x_pollo)
            posicionesPollos_y.push(y_pollo)
        }
    }
}

//Mover cerdo con las flechas
let cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    imagen: new Image()
}

cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", dibujarCerdo)
function dibujarCerdo(){
    papel.drawImage(cerdo.imagen,0,0)
    posicionesVacas_x.splice(0,rememberVacas[0])
    posicionesVacas_y.splice(0,rememberVacas[0])
}

let x_cerdo = 0
let y_cerdo = 0


document.addEventListener("keydown", moverCerdo)
function moverCerdo(evento){
    teclaCodigo = evento.keyCode
    switch (teclaCodigo) {
        case 37:
            console.log("Izquierda")
            x_cerdo = x_cerdo - 80
            break;
        case 38:
            console.log("Arriba")
            y_cerdo = y_cerdo - 80
            break;
        case 39:
            console.log("Derecha")
            x_cerdo = x_cerdo + 80
            break;
        case 40:
            console.log("Abajo")
            y_cerdo = y_cerdo + 80
            break;
    }
    papel.clearRect(0,0,500,500)
    dibujar2()
    papel.drawImage(cerdo.imagen,x_cerdo,y_cerdo)
}

function dibujar2(){
    papel.drawImage(fondo.imagen,0,0)
    for(i=0;i<numeroPollos;i++){
        papel.drawImage(pollo.imagen,posicionesPollos_x[i],posicionesPollos_y[i])
    }

    for(i=0;i<numeroVacas;i++){
        console.log("funciona")
        papel.drawImage(vaca.imagen,posicionesVacas_x[i],posicionesVacas_y[i])
    }
}


function aleatorio(min,max){
    resultado = Math.floor(Math.random()*(max-min+1))+min
    return resultado
}


