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
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
    mostrarTextoEnCaja("txtNombre","");
}

