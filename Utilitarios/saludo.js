saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let apellido;
    apellido = recuperarTexto("txtApellido");
}

recuperarTexto = function(idComponente){
    let cmpTexto;
    let contenido;
    cmpTexto = document.getElementById(idComponente);
    contenido = cmpTexto.value;
    console.log(contenido);
    return contenido;
}