ejecutarValidacion = function () {
    let contrasena = recuperarTexto("txtPassword")
    let retorno = validarPassword(contrasena);
    mostrarTexto("lblValidacion", retorno);
}

        
validarPassword = function (password) {
    let mayuscula = false;
    let digito = false;
    let signo = false;
    let error = "";
    if (password.length < 8 || password.length > 16) {
        error = error + "La cotrasenia debe tener al menos 8 caracteres y no mas de 16 caracteres";
    }
    
    for (let i = 0; i < password.length; i++) {

        let actualC = password.charAt(i);
        
        if (letraMayuscula(actualC)) {
            mayuscula = true;
        }
        if (Numero (actualC)) {
            digito = true;
        }
        if (esCaracterEspecial(actualC)) {
            signo = true;
        }
    }

    if (!mayuscula) {
        error += " La contrasenia debe contener al menos una letra mayúscula.\n";
    }

    if (!digito) {
        error += " La contrasenia debe contener al menos un dígito (0-9).\n";
    }

    if (!signo) {
        error += " La contrasenia debe contener al menos un caracter especial (*,-,_).\n";
    }

    console.log(error);

    return error;

}

letraMayuscula = function (caracter) {
    let prueba;
    prueba = caracter.charCodeAt(0);
    if (prueba >= 65 && prueba <= 90) {
        return true;
    } else {
        return false;
    }
}
Numero = function (caracter) {
    let prueba;
    prueba = caracter.charCodeAt(0);
    if (prueba >= 48 && prueba <= 57) {
        return true;
    } else {
        return false;
    }
}
esCaracterEspecial = function (caracter) {
    let signo;
    signo = caracter.charCodeAt(0);
    if (signo == 45 || signo == 95 || signo == 42) {
        return true;
    } else {
        return false;
    }
}
