calcularPromedioNotas = function(){
    let nota1 = recuperarFlotante("txtN1");
    let nota2 = recuperarFlotante("txtN2");
    let nota3 = recuperarFlotante("txtN3");
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let promedioF = promedio.toFixed(2);
    cambiarTexto("lblResultado",promedioF);
    if(promedioF <5 && promedio >0){
        cambiarTexto("lblMensaje","REPROBADO");
        cambiarImagen("imgResultado", "./fracaso.gif");
    }else if (promedio>= 5 && promedio <=8){
        cambiarTexto("lblMensaje","BUEN TRABAJO");
        cambiarImagen("imgResultado", "./buenTrabajo.gif");
    }else if(promedio>8 && promedio <=10){
        cambiarTexto("lblMensaje","EXCELENTE");
        cambiarImagen("imgResultado","./exito.gif");
    }else{
        cambiarTexto("lblMensaje","DATOS INCORRECTOS");
        cambiarImagen("imgResultado","./datosIncorrectos.gif");
    }
}