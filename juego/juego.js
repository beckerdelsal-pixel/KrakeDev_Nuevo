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
    
}