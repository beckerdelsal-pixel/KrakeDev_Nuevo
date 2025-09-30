saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let apellido;
    apellido = recuperarTexto("txtApellido");
    let edad;
    edad = recuperarInt("txtEdad");
    let estatura;
    estatura = recuperarFloat("txtEstatura");
    let mensaje;
    mensaje = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensaje);
}

mostrarTexto = function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto = function(idComponente){
    let cmpTexto;
    let contenido;
    cmpTexto = document.getElementById(idComponente);
    contenido = cmpTexto.value;
    console.log(contenido);
    return contenido;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    
    return valorFloat;
}