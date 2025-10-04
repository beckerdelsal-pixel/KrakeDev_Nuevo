calcularPromedioNotas = function(){
    let nota1 = recuperarFlotante("txtN1");
    let nota2 = recuperarFlotante("txtN2");
    let nota3 = recuperarFlotante("txtN3");
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let promedioF = promedio.toFixed(2);
    cambiarTexto("lblResultado",promedioF);
    if(promedioF > 7){
        cambiarImagen("imgResultado", "./exito.gif");
    }else{
        cambiarImagen("imgResultado", "./fracaso.gif");
    }
}