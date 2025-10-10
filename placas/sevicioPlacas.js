validarEstructura = function (placa) {
    let errores = "";
    //la longitud de la placa debe ser de 7 u 8 caracteres
    if (placa.length < 7 || placa.length > 8) {
        errores = errores + "La cantidad de caracteres deben ser 7 u 8 ";
    }
    if (!esMayuscula(placa.charAt(0))) {
        errores = errores + "El primer caracter debe ser mayuscula ";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores = errores + "El segundo caracter debe ser una mayuscula ";
    }
    if (!esMayuscula(placa.charAt(2))) {

        errores = errores + "El tercer caracter debe ser una mayuscula ";
    }
    if (!esGuion(placa.charAt(3))) {
        errores = errores + "El cuarto caracter debe ser un guion ";
    }
    if (!esDigito(placa.charAt(4))) {
        errores = errores + "El quinto caracter debe ser un digito ";
    }
    if (!esDigito(placa.charAt(5))) {
        errores = errores + "El sexto caracter debe ser un digito ";
    }
    if (!esDigito(placa.charAt(6))) {
        errores = errores + "El septimo caracter debe ser un digito ";
    }
    if (placa.length == 8) {
        console.log("TIENE 8 DIGITOS LA PLACA");
        if (!esDigito(placa.charAt(7))) {
            errores = errores + "El octavo caracter debe ser un digito ";
        }
    }
    if (errores === "") {
        return null;
    } else if(errores != ""){
        return errores;
    }
}
/*el segundo caracter es una letra mayuscula
    let carac2 = esMayuscula(1);
//el tercer caracter es una letra mayuscula
    let carac3 = esMayuscula(2);
// el cuarto caracter es un guion
    let carac4 = esGuion(3);
//el quinto caracter es un numero
    let carac5 = esDigito(4);
//el sexto caracter es un numero 
    let carac6 = esDigito(5);
//el septimo caracter es un  numero
    let carac7 = esDigito(6);
 
//el primer caracter es una letra mayuscula*/


