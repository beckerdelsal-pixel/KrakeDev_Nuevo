ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;
    for(let posicion =0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter: "+caracter+" en la posicion: "+posicion);
    }

    for(let posicion =0; posicion<=cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER "+caracter + " POSICION "+posicion);
    }
}

ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let resultado = invertirCadena(mensaje);
    mostrarTexto("lblMensaje",resultado);
}

invertirCadena = function(cadena){
    let caracter;
    let invertida = "";
    for(let posicion = cadena.length-1; posicion >= 0 ; posicion--){
        caracter = cadena.charAt(posicion);
        console.log("Caracter: "+caracter+" en la posicion: "+posicion);
        invertida = invertida + caracter;
    }
    return invertida;
}