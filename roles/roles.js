let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]
//elementos roles
//cedula, nombre, sueldo, valorAPagar, aporteEmpleado, aporteEmpleador
let roles = [];

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitar();
}
mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
}
mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr><th>CEDULA</th>" +
        "<th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for (i = 0; i < empleados.length; i++) {
        let elementoEmpleado = empleados[i];
        contenidoTabla += "<tr><td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}
buscarEmpleado = function (cedula) {
    let empleadoEncontrado = null;
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}
ejecutarBusqueda = function () {
    let valor = recuperarTexto("txtBusquedaCedula");
    let cedulaBuscada = buscarEmpleado(valor);
    if (cedulaBuscada == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", cedulaBuscada.cedula);
        mostrarTextoEnCaja("txtNombre", cedulaBuscada.nombre);
        mostrarTextoEnCaja("txtApellido", cedulaBuscada.apellido);
        mostrarTextoEnCaja("txtSueldo", cedulaBuscada.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");

    }
}
agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}
guardar = function () {
    //validacion cedula
    let erroresCedula = "";
    let digito = false;
    let tamanioCedula = false;
    let valorCedula = recuperarTexto("txtCedula");
    for (let i = 0; i < valorCedula.length; i++) {
        let caracterCedula = valorCedula.charAt(i);
        if (esDigito(caracterCedula)) {
            digito = true;
        }
        if (valorCedula.length == 10) {
            tamanioCedula = true;
        }
    }
    if (!digito) {
        erroresCedula += "Todos los caracteres deben ser digitos";
    }
    if (!tamanioCedula) {
        erroresCedula += "La cedula debe tener 10 digitos";
    }

    mostrarTexto("lblErrorCedula", erroresCedula);

    //validacion nombre
    let erroresNombre = "";
    let letra = false;
    let tamanioNombre = false;
    let valorNombre = recuperarTexto("txtNombre");
    for (let i = 0; i < valorNombre.length; i++) {
        let caracterNombre = valorNombre.charAt(i);
        if (letraMayuscula(caracterNombre)) {
            letra = true;
        }
        if (valorNombre.length >= 3) {
            tamanioNombre = true;
        }
    }
    if (!letra) {
        erroresNombre += "Los caracteres deben ser letras mayusculas";
    }
    if (!tamanioNombre) {
        erroresNombre += "Debe ingresar al menos 3 caracteres";
    }
    mostrarTexto("lblErrorNombre", erroresNombre);

    // validacion apellido
    let erroresApellido = "";
    let letraApellido = false;
    let tamanioApellido = false;
    let valorApellido = recuperarTexto("txtApellido");
    for (let i = 0; i < valorApellido.length; i++) {
        let caracterApellido = valorApellido.charAt(i);
        if (letraMayuscula(caracterApellido)) {
            letraApellido = true;
        }
        if (valorApellido.length >= 3) {
            tamanioApellido = true;
        }
    }
    if (!letraApellido) {
        erroresApellido += "Los caracteres deben ser letras mayusculas";
    }
    if (!tamanioApellido) {
        erroresApellido += "Debe ingresar al menos 3 caracteres";
    }
    mostrarTexto("lblErrorApellido", erroresApellido);

    //validacion sueldo
    let cmpSueldo = document.getElementById("txtSueldo");
    let valorSueldo = parseFloat(cmpSueldo.value);
    let errorSueldo = "";
    if (isNaN(valorSueldo)) {
        errorSueldo += "Debe ingresar solo digitos en este campo";
    }
    if (valorSueldo < 400 || valorSueldo > 5000) {
        errorSueldo += "El sueldo debe estar entre 400 y 5000 incluidos";
    }

    mostrarTexto("lblErrorSueldo", errorSueldo);

    if (erroresCedula == "" & erroresNombre == "" & erroresApellido == "" & errorSueldo == "") {
        if (esNuevo == true) {
            let empleado = {};
            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            let retorno = agregarEmpleado(empleado);
            if (retorno == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitar();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO REGISTRADO CON LA CEDULA: " + valorCedula);
                let respuesta = buscarEmpleado(empleado.cedula);
                if (respuesta != null) {
                    respuesta.cedula = empleado.cedula;
                    respuesta.nombre = empleado.nombre;
                    respuesta.apellido = empleado.apellido;
                    respuesta.sueldo = empleado.sueldo;
                    alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                    mostrarEmpleados();
                    deshabilitar();

                }
            }
        }
    }
}

deshabilitar = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitar();
}

buscarPorRol = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedulaRol");
    let encontrada = buscarEmpleado(cedulaBuscar);
    if (encontrada != null) {
        mostrarTexto("infoCedula", encontrada.cedula);
        mostrarTexto("infoNombre", encontrada.nombre + " " + encontrada.apellido);
        mostrarTexto("infoSueldo", encontrada.sueldo);

    } else {
        alert("NO EXISTE EMPLEADO");
    }
}
calcularAporteEmpleado = function (sueldo) {
    let aporte;
    aporte = (sueldo * 9.45) / 100;
    return aporte;
}
calcularValorAPagar = function (sueldo, aporte, descuento) {
    let valorAPagar = (sueldo - aporte) - descuento;
    return valorAPagar;
}

calcularRol = function () {
    let subDescuento = recuperarFloat("txtDescuentos");
    let subSueldo = recuperarFloatDiv("infoSueldo");
    if (subDescuento >= 0 && subDescuento <= subSueldo) {
        let aporte = calcularAporteEmpleado(subSueldo);
        mostrarTexto("infoIESS", aporte);
        let total = calcularValorAPagar(subSueldo, aporte, subDescuento);
        mostrarTexto("infoPago", total);
        habilitarComponente("btnGuardarRol");
    }
}

buscarRol = function (cedula) {
    let personaRol = null;
    let elementoPersona;
    for (let i = 0; i < roles.length; i++) {
        elementoPersona = roles[i];
        if (elementoPersona.cedula == cedula) {
            personaRol = elementoPersona;
            break;
        }
    }
    return personaRol;

}
agregarRol = function (rol) {
    let resultadoRol = buscarRol(rol.cedula);
    if (resultadoRol == null) {
        roles.push(rol);
        return true;
    } else {
        return false;
    }
}
calcularAporteEmpleador = function (sueldoEmpleado) {
    let aporteEmpleador = (sueldoEmpleado * 11.15) / 100;
    return aporteEmpleador;
}
guardarRol = function () {
    let valorCedula = recuperarIntDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorApellido = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorAporteIESS = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleador = calcularAporteEmpleador(valorSueldo);
    let rol = {};
    rol.cedula = valorCedula;
    rol.nombre = valorNombre;
    rol.apellido = valorApellido;
    rol.sueldo = valorSueldo;
    rol.aporteIESSEmpleado = valorAporteIESS;
    rol.aporteIESSEmpleador = aporteEmpleador;
    rol.valosPagar = valorAPagar;
    let agregado = agregarRol(rol);
    if (agregado == true) {
        //alert("ROL GUARDADO CORRECTAMENTE");
        mostrarEmpleados();
        deshabilitarComponente("btnGuardarRol");
    }

}