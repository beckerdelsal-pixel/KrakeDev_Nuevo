//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
esMayuscula = function (caracter) {
    let codigo;
    codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}
guardarPalabra = function () {
    let texto;
    let confirmacionM = true;
    texto = recuperarTexto("txtSecreta");
    for (let i = 0; i < texto.length; i++) {
        let actual = texto.charAt(i);
        if (texto.length != 5 || esMayuscula(actual) === false) {
            confirmacionM = false;

        }
    }
    if (confirmacionM === true) {
        palabraSecreta = texto;
        cambiarAPassword("txtSecreta");
        console.log(palabraSecreta);
    } else {
        alert("DEBE INGRESAR UNA PALABRA CON 5 LETRAS MAYUSCULAS");
    }
    

}
cambiarAPassword = function (idComponente) {
    let componente = document.getElementById(idComponente);
    if (componente.type === 'text') {
        componente.type = 'password';
    }
}

mostrarLetra = function (letra, posicion) {
    let componente;
    componente = "div" + posicion;
    mostrarTexto(componente,letra);
    
    
}
validar = function(letra){
    let letrasEncontradas = 0;
    for(let i=0; i<palabraSecreta.length;i++){
        if(letra === palabraSecreta.charAt(i)){
            mostrarLetra(letra,i);
            letrasEncontradas++;
        }
    }
}

ingresarLetra = function(){
    let recuperado = recuperarTexto("txtLetra");
    if(esMayuscula(recuperado)===false){
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }else{
        validar(recuperado);
    }
}


    