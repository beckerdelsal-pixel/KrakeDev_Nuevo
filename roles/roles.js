let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}
mostrarOpcionRol = function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr><th>CEDULA</th>"+
    "<th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for(i=0;i<empleados.length;i++){
        let elementoEmpleado = empleados[i];
        contenidoTabla += "<tr><td>"+elementoEmpleado.cedula+"</td>"+
        "<td>"+elementoEmpleado.nombre+"</td>"+
        "<td>"+elementoEmpleado.apellido+"</td>"+
        "<td>"+elementoEmpleado.sueldo+"</td>";
    }
    contenidoTabla+= "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}