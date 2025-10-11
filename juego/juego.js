let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function (seleccionado) {
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    mostrarImagen("imgRespuesta", ruta);
    let ganador = determinarGanador(seleccionado, elemento);

    if (ganador == 0) {
        mostrarTexto("lblRespuesta", "EMPATE");
    }
    if (ganador == 1) {
        mostrarTexto("lblRespuesta", "GANASTE LA RONDA");
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("lblPuntosUsuario", puntosUsuario);
    }
    if (ganador == 2) {
        mostrarTexto("lblRespuesta", "PERDISTE LA RONDA");
        puntosComputador = puntosComputador + 1;
        mostrarTexto("lblPuntosComputador",puntosComputador);
    }
    if(puntosUsuario == 5 && puntosComputador < 5){
        mostrarTexto("lblGanador","HAS GANADO EL JUEGO");
    }
    if(puntosComputador == 5 && puntosUsuario < 5){
        mostrarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO");
    }

}

limpiar = function(){
    mostrarTexto("lblRespuesta","");
    mostrarTexto("lblPuntosUsuario","");
    mostrarTexto("lblPuntosComputador","");
    mostrarTexto("lblGanador","");
    mostrarImagen("imgRespuesta","");
}