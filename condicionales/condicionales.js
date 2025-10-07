
calcularTasaInteres = function(ingresoAnual){
    let tasaInteres;
    if(tasaInteres < 300000){
        tasaInteres = ingresoAnual * 0.16;
        console.log("La tasa de interes es de 16%, con un valor de: $"+tasaInteres);
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasaInteres = ingresoAnual * 0.15;
        console.log("La tasa de interes es de 15%, con un valor de: $"+tasaInteres);
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasaInteres = ingresoAnual * 0.14;
        console.log("La tasa de interes es de 14%, con un valor de: $"+tasaInteres);
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasaInteres = ingresoAnual * 0.13;
        console.log("La tasa de interes es de 13%, con un valor de: $"+tasaInteres);
    }else if(ingresoAnual >= 2000000){
        tasaInteres = ingresoAnual * 0.12;
        console.log("La tasa de interes es de 12%, con un valor de: $"+tasaInteres);
    }
    return tasaInteres;
}

calcularCapacidadPago = function(edad, ingresosMensuales, egresosMensuales){
    let cuotaMensual;
    let subtotal;
    subtotal = egresosMensuales - ingresosMensuales;
    if(edad>50){
        cuotaMensual = subtotal * 0.30;
        console.log(cuotaMensual);
    }else if(edad <=50){
        cuotaMensual = subtotal * 0.40;
        console.log(cuotaMensual);
    }
    return cuotaMensual;
}

calcularDescuento = function(precio, cantidad){
    let totalDePagar;
    let descuento;
    if(cantidad >= 3 && cantidad <= 5){
        console.log("El descuento es del 2%");
        descuento = precio * 0.02;
        totalDePagar = precio - descuento;
    }else if(cantidad >= 6 && cantidad <= 11){
        console.log("El descuento es del 3%");
        descuento = precio * 0.03;
        totalDePagar = precio - descuento;
    }else if(cantidad >=22){
        console.log("El descuento es del 4%");
        descuento = precio * 0.04;
        totalDePagar = precio - descuento;
    }
    return totalDePagar;
}
determinarColesterolLDL = function(nivelColesterol){
    if(nivelColesterol < 100){
        return "El nivel de su colesterol se encuentra en estado Óptimo"; 
    }else if(nivelColesterol >= 100 && nivelColesterol <= 129){
        return "El nivel de su colesterol se encuentra en un estado Casi Óptimo";
    }else if(nivelColesterol >= 130 && nivelColesterol <= 159){
        return "El nivel de su colesterol se encuetra en un Límite Alto";
    }else if(nivelColesterol >= 160 && nivelColesterol <= 189){
        return "El nivel de su colesterol se encuentra Alto";
    }else if(nivelColesterol >= 190){
        return "El nivel de su colesterol se encuentra Muy Alto!";
    }
}
validarClave = function(clave){
    let longitud;
    longitud = clave.lenght;
    if(longitud >= 8 && longitud <= 16){
        return true;
    }else{
        return false;
    }
}
esMayuscula = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >=65 && prueba <= 90){
        return true;
    }else{
        return false;
    }
}
esMinuscula = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >= 97 && prueba <= 122 || prueba == 130 || prueba >= 160 && prueba <= 163){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let prueba;
    prueba = caracter.charCodeAt(0);
    if(prueba >= 48 && prueba <= 57){
        return true;
    }else{
        return false;
    }
}
darPermiso = function(){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso = function(){
    if(notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
        return true;
    }else{
        return false;
    }
}
dejarSalir = function(){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90 && notaFisica > notaMatematica){
        return true;
    }else{
        return false;
    }
}