validarPlaca = function(){
    let placa;
    let erroresEstructura;
    placa  = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
        
    }else{
        let mensaje = "ESTRUCTURA INCORRECTA: "+erroresEstructura;
        mostrarTexto("lblValidacion",mensaje);
    }
}
