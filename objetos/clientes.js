let clientes = [
    { cedula: " 0998855622 ", nombre: " Juan ", apellido : "Ramirez", edad: 20 },
    { cedula: " 1554478966 ", nombre: " Mario ", apellido : "Fernandez", edad: 50 },
    { cedula: " 1778599321 ", nombre: " Pepe ", apellido : "Rodriguez", edad: 22 }
]

crearCliente = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.apellido = valorApellido;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
}
agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
        alert("CLIENTE AGREGADO");
        mostrarClientes();
    }else{
        alert("YA EXISTE UN CLIENTE CON ESA CEDULA: " + cliente.cedula)
    }
    
}
buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

guardarCambios = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorEdad = recuperarInt("txtEdad");

    let clienteModificado = {};
    clienteModificado.cedula=valorCedula;
    clienteModificado.nombre = valorNombre;
    clienteModificado.apellido = valorApellido;
    clienteModificado.edad=valorEdad;
    modificarCliente(clienteModificado);
    mostrarClientes();
}
modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.apellido = cliente.apellido;
        clienteEncontrado.edad = cliente.edad;
    }
}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let respuesta = buscarCliente(valorCedula);
    if(respuesta==null){
        alert("CLIENTE NO ENCONTRADO");
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtApellido",respuesta.apellido);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
    }
}

mostrarClientes = function () {
    let cmpTabla;
    cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td> " + elementoCliente.cedula + " </td>" +
            "<td> " + elementoCliente.nombre + " </td>" +
            "<td> " + elementoCliente.apellido + " </td>" +
            "<td> " + elementoCliente.edad + " </td></tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
