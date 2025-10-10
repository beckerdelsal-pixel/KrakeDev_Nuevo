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
    } else if (errores != "") {
        return errores;
    }
}

obtenerProvincia = function (placa) {
    if(placa.charAt(0) == "A"){
        return "Azuay";
    }else if(placa.charAt(0) =="B"){
        return "Bolivar";
    }else if(placa.charAt(0) =="U"){
        return "Caniar";
    }else if(placa.charAt(0) =="C"){
        return "Carchi";
    }else if(placa.charAt(0) =="X"){
        return "Cotopaxi";
    }else if(placa.charAt(0) =="H"){
        return "Chimborazo"
    }else if(placa.charAt(0) =="O"){
        return "El Oro";
    }else if(placa.charAt(0) =="E"){
        return "Esmeraldas";
    }else if(placa.charAt(0) =="W"){
        return "Galapagos";
    }else if(placa.charAt(0) =="G"){
        return "Guayas";
    }else if(placa.charAt(0) =="I"){
        return "Imbabura";
    }else if(placa.charAt(0) =="L"){
        return "Loja";
    }else if(placa.charAt(0) =="R"){
        return "Los Rios";
    }else if(placa.charAt(0) =="M"){
        return "Manabi";
    }else if(placa.charAt(0) =="V"){
        return "Morona Santiago";
    }else if(placa.charAt(0) =="N"){
        return "Napo";
    }else if(placa.charAt(0) =="S"){
        return "Pastaza";
    }else if(placa.charAt(0) =="P"){
        return "Pichincha";
    }else if(placa.charAt(0) =="K"){
        return "Sucumbíos";
    }else if(placa.charAt(0) =="Q"){
        return "Orellana";
    }else if(placa.charAt(0) =="T"){
        return "Tungurahua";
    }else if(placa.charAt(0) =="Z"){
        return "Zamora Chinchipe";
    }else if(placa.charAt(0) =="Y"){
        return "Santa Elena";
    }else{
        return null;
    }
    
  
}