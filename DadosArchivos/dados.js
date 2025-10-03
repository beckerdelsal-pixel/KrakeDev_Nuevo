jugar = function(){

    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    let mensajeBueno = "  ES MAYOR A 3, GANASTE! ";
    let mensajeMalo = "  ES MENOR A 3, ANDAS DE MALAS ";
    if(aleatorio>3){
        cambiarTexto("lblMensaje",mensajeBueno);
    }else{
        cambiarTexto("lblMensaje",mensajeMalo);
    }
}

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado= aleatorio *6;
    numeroEntero= parseInt(numeroMultiplicado);
    valorDado = numeroEntero+1;
    return valorDado;
}