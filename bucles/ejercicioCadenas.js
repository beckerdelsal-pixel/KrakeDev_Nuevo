ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " en la posicion: " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion);
    }
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let resultado = invertirCadena(mensaje);
    mostrarTexto("lblMensaje", resultado);
}

invertirCadena = function (cadena) {
    let caracter;
    let invertida = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " en la posicion: " + posicion);
        invertida = invertida + caracter;
    }
    return invertida;
}

buscarLetra = function (cadena, letra) {
    let caracter;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        caracter = cadena.charAt(i);
        if (caracter == letra) {
            existeLetra = true;
        }
    }
    if (existeLetra == true) {
        console.log("EXISTE");
    } else {
        console.log("NO EXISTE");
    }
}
/*
contarMayuscular = function (cadena) {
    let letra;
    let contador;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contador++;
        }
    }
    return contador;
}*/