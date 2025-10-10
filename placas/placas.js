validarPlaca = function(){
    let placa;
    let erroresEstructura;
    placa  = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
        let provincia =obtenerProvincia(placa);
        if (provincia != null){
            mostrarTexto("lblProvincia",provincia);
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
        }
        let TipoVehiculo;
        TipoVehiculo = obtenerTipoVehiculo(placa);
        if(TipoVehiculo != null){
            mostrarTexto("lblVehiculo",TipoVehiculo);
        }else{
            mostrarTexto("lblVehiculo","VEHICULO INCORRECTO");
        }

        let picoYPlaca;
        picoYPlaca = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblPicoYPlaca",picoYPlaca);
        
    }else{
        let mensaje = "ESTRUCTURA INCORRECTA: "+erroresEstructura;
        mostrarTexto("lblValidacion",mensaje);
    }
}
