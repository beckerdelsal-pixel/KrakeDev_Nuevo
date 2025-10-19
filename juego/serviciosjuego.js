obtenerAleatorio = function () {
    let aleatorio;
    let multiplicado;
    let valorEntero;
    aleatorio = Math.random()
    multiplicado = aleatorio * 3;
    valorEntero = parseInt(multiplicado);
    let valorFinal = valorEntero + 1;
    return valorFinal;
}

generarElemento = function () {
    let cadena = obtenerAleatorio();
    if (cadena == 1) {
        return "Piedra";
    } else if (cadena == 2) {
        return "Papel";
    } else if (cadena == 3) {
        return "Tijera";
    }
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let retorno;
    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    }
    if (eleccionJugador1 === "Piedra" & eleccionJugador2 === "Tijera" ||
        eleccionJugador1 === "Tijera" & eleccionJugador2 === "Papel" ||
        eleccionJugador1 === "Papel" & eleccionJugador2 === "Piedra") {
        return 1;
    }
    if (eleccionJugador2 === "Piedra" & eleccionJugador1 === "Tijera" ||
        eleccionJugador2 === "Tijera" & eleccionJugador1 === "Papel" ||
        eleccionJugador2 === "Papel" & eleccionJugador1 === "Piedra") {
        return 2;
    }
    return retorno;
}
generarRuta = function(nombre){
    let ruta;
    if(nombre == 'Piedra'){
        ruta= "./imagenes/piedra.png";
    }else if(nombre == 'Papel'){
        ruta= "./imagenes/papel.png"
    }else if(nombre == 'Tijera'){
        ruta = "./imagenes/tijera.png"
    }
    return ruta;
}