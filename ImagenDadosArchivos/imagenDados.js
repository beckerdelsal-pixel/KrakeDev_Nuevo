let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
   
}

modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos",puntos);
    //si el jugador obtiene as de 20 puntos, mostrar un mensaje "GANASTE"
    if(puntos > 20){
        cambiarTexto("lblMensaje","GANASTE!")
        setTimeout(limpiar,4000);
    }
    //invoca a limpiar
}
//no recibe parametros, resta uno a la variable lanzamientos, guarda el resultado
//muestra en pantalla
modificarLanzamientos = function(){
    //si lanzamientos llega a 0 mostrar en pantalla "GAME OVER"
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if (lanzamientos == 0 && puntos<20){
        cambiarTexto("lblMensaje","GAME OVER");
        setTimeout(limpiar,4000);
    }
    //invoca a limpiar
}

limpiar = function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en variables y en pantalla
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lblMensaje", " ");
    cambiarImagen("imgDado","");
}
//funcion mostrarCara, recibe como parametro el numero que se quiere mostrar y muestra la imagen correspondiente
//no retorna nada
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","./dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","./dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","./dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","./dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","./dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","./dados6.png");
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}