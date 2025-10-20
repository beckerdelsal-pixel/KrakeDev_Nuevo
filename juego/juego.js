<<<<<<< HEAD
jugar = function(seleccionado){
    let elemento = generarElemento();
    seleccionado = generarRuta(elemento);
    mostrarImagen("imgRespuesta",seleccionado);
    let ganador = determinarGanador(elemento, seleccionado);

    if(ganador === 0){
        mostrarTexto("lblRespuesta", "EMPATE");
        console.log("EMPATE ");
    }else if(ganador === 1){
        mostrarTexto("lblRespuesta", "GANA EL JUGADOR 1");
        console.log("GANA JUGADOR 1");
    }else if(ganador === 2){
        mostrarTexto("lblRespuesta", "GANA EL JUGADOR 2 (MAQUINA)");
        console.log("GANA JUGADOR 2");
    }
    
=======
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
>>>>>>> 554cd6349e3c4bdffc9294ed6fc147bd798f6bb4
}