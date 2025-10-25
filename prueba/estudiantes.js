

let estudiantes = [
    { nombreCompleto: "Juanito Perez", correo: "juanperez@gmail.com", id: "1234" },
    { nombreCompleto: "Alan Brito", correo: "alanbrito@gmail.com", id: "4321" }
];

buscarEstudiante = function (id) {
    let estudianteEncontrado = null;
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        if (elementoEstudiante.id == id) {
            estudianteEncontrado = elementoEstudiante;
            break;
        }
    }
    return estudianteEncontrado;
}
ejecutarBusqueda = function () {
    let valor = recuperarTexto("txtId");
    let idBuscada = buscarEstudiante(valor);
    if (idBuscada == null) {
        alert("Estudiante NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtNombreCompleto", idBuscada.nombreCompleto);
        mostrarTextoEnCaja("txtCorreo", idBuscada.correo);
        mostrarTextoEnCaja("txtId", idBuscada.id);
        /*
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
*/
    }
}

agregarEstudiante = function (estudiante) {
    let resultado = buscarEstudiante(estudiante.id);
    if (resultado == null) {
        estudiantes.push(estudiante);
        return true;
    } else {
        return false;
    }
}

registrarEstudiantes = function () {
    let erroresId = "";
    let digito = false;

    let valorId = recuperarTexto("txtId");
    for (let i = 0; i < valorId.length; i++) {
        let caracterId = valorId.charAt(i);
        if (esDigito(caracterId)) {
            digito = true;
        }
    }
    if (!digito) {
        erroresId += "Todos los caracteres deben ser digitos";
    }


    mostrarTexto("lblErrorId", erroresId);

    //validacion nombre
    let erroresNombre = "";
    let letra = false;
    let espacios = false;
    let valorNombre = recuperarTexto("txtNombreCompleto");
    if (valorNombre == null) {
        erroresNombre += "El campo nombre completo es obligatorio";
    } else {
        for (let i = 0; i < valorNombre.length; i++) {
            let caracterNombre = valorNombre.charAt(i);
            if (letraMayuscula(caracterNombre)) {
                letra = true;
            }
            if (esEspacio(caracterNombre)) {
                espacios = true;
            }

        }
    }


    if (!letra) {
        erroresNombre += "Los nombres deben empezaar en mayusculas";
    }
    if (!espacios) {
        erroresNombre += "Debe de ingresar un espacio entre cada nombre y apellido";
    }

    mostrarTexto("lblErrorNombreCompleto", erroresNombre);

    // validacion correo
    let erroresCorreo = "";
    let letraCorreo = false;

    let valorCorreo = recuperarTexto("txtCorreo");
    for (let i = 0; i < valorCorreo.length; i++) {
        let caracterCorreo = valorCorreo.charAt(i);
        if (esArroba(caracterCorreo)) {
            letraCorreo = true;
        }

    }
    if (!letraCorreo) {
        erroresCorreo += "Debe ingresar un correo valido";
    }
    if (valorCorreo.length == null) {
        erroresCorreo += "Este campo es obligatorio";
    }
    mostrarTexto("lblErrorCorreo", erroresCorreo);


    if (erroresId == "" & erroresNombre == "" & erroresCorreo == "") {

        let estudiante = {};
        estudiante.nombreCompleto = valorNombre;
        estudiante.id = valorId;
        estudiante.correo = valorCorreo;

        let retorno = agregarEstudiante(estudiante);
        if (retorno == true) {
            alert("ESTUDIANTE GUARDADO CORRECTAMENTE");
            mostrarEstudiantes();
            //deshabilitar();
        } else {
            alert("YA EXISTE UN ESTUDIANTE REGISTRADO CON el ID: " + valorId);
            let respuesta = buscarEstudiante(estudiante.id);
            if (respuesta != null) {
                respuesta.id = estudiante.id;
                respuesta.nombreCompleto = estudiante.nombreCompleto;
                respuesta.correo = estudiante.correo;

                alert("Estudiante MODIFICADO EXITOSAMENTE");
                mostrarEstudiantes();
                //   deshabilitar();

            }
        }

    }
}

mostrarEstudiantes = function () {
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr><th>NOMBRE COMPLETO</th>" +
        "<th>CORREO</th><th>ID</th></tr>";
    for (i = 0; i < estudiantes.length; i++) {
        let elementoEstudiante = estudiantes[i];
        contenidoTabla += "<tr><td>" + elementoEstudiante.nombreCompleto + "</td>" +
            "<td>" + elementoEstudiante.correo + "</td>" +
            "<td>" + elementoEstudiante.id + "</td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
eliminarPorId = function () {
    let poreliminar = recuperarTexto("txtEliminarId");
    let estudianteEncontrado = null;
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++){
        elementoEstudiante = estudiantes[i];
        if (elementoEstudiante.id == poreliminar){
            estudianteEncontrado = elementoEstudiante;
            console.log(i);
            estudiantes.splice(i, 1);
        }
    }

     mostrarEstudiantes();
}


    

