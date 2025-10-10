validarPlaca = function(){
    let placa;
    let erroresEstructura;
    placa  = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
        let provincia =obtenerProvincia(placa);
        if (provincia != null){
            mostrarTexto("lblResumen",provincia);
        }else{
            mostrarTexto("lblResumen","PROVINCIA INCORRECTA");
        }
        
        
    }else{
        let mensaje = "ESTRUCTURA INCORRECTA: "+erroresEstructura;
        mostrarTexto("lblValidacion",mensaje);
    }
}
