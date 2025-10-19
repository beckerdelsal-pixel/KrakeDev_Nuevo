//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores =0;
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
            coincidencias = coincidencias +1;
        }
    }
    if(letrasEncontradas===0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra = function(){
    let recuperado = recuperarTexto("txtLetra");
    intentos++;
    //console.log(intentos);
    if(esMayuscula(recuperado)===false){
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }else{
        validar(recuperado);
        
    }
    if(coincidencias === 5 && intentos <10){
     //   alert("HA GANADO EL JUEGO!!!!");
        mostrarImagen("ahorcadoImagen","ganador.gif");
    }else if(intentos===10 && coincidencias <5){
      //  alert("HA PERDIDO EL JUEGO :'c");
        mostrarImagen("ahorcadoImagen","./gameOver.gif");
    }
   // console.log(coincidencias);
}

mostrarAhorcado = function(){
    if(errores === 1){
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
    }else if(errores === 2){
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
    }else if(errores === 3){
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
    }else if(errores === 4){
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
    }else if(errores === 5){
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
    }else if(errores === 6){
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
    }else if(errores === 7){
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
    }else if(errores === 8){
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
    }else if(errores === 9){
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
    }
}