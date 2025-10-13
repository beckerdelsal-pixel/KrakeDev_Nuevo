calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR 1");
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("ERROR 2")
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("ERROR 3");
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }
    }



}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "DEBE INGRESAR UN NUMERO");
        existeError = true;
        mostrarTextoEnCaja("txtNota1", " ");
    } else {
        mostrarTexto("lblError1", "")
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "DEBE INGRESAR UN NUMERO");
        existeError = true;
        mostrarTextoEnCaja("txtNota2", " ");
    } else {
        mostrarTexto("lblError2", "")
    }
    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "DEBE INGRESAR UN NUMERO");
        existeError = true;
        mostrarTextoEnCaja("txtNota3", " ");
    } else {
        mostrarTexto("lblError3", "")
    }
    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }

}
calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    esNotaValida = function (nota, idComponenteError) {
        let hayErrores = false;
        if (isNaN(nota)) {
            mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
            hayErrores = true;
        }
        if (nota < 0 || nota > 10) {
            mostrarTexto(idComponenteError, "EL NUMERO DEBE ESTAR ENTRE 0 Y 10");
            hayErrores = true;
        }
        if(hayErrores==false){
            mostrarTexto(idComponenteError," ");
        }
        return !hayErrores;
    }
    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }



}






