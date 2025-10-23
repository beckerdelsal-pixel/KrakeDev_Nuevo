let persona1;
let persona2;
let persona3;
let persona4;
let persona5;
let personas = [
    persona1 = {
        nombre: "Marcos", edad:18
    },
    persona2 ={
        nombre:"Roberto", edad:18
    },
    persona3 = {
        nombre: "Kathe", edad: 25
    },
    persona4 = {
        nombre: "Diana", edad: 12
    },
    persona5 = {
        nombre: "Benja", edad: 5
    }
];

agregarPersona = function(){
 
    let errorNombre="";
    let valorNombre = recuperarTexto("txtNombre");
    if(valorNombre.length >=3){
        console.log("Nombre valido");
        mostrarTexto("lblErrorNombre","");
        
    }else{
        errorNombre = "El nombre debe tener minimo 3 caracteres ";
        mostrarTexto("lblErrorNombre",errorNombre);
    }
    

    let errorEdad ="";
    let valorEdad = recuperarInt("txtEdad");
    if(valorEdad>0 & valorEdad <100){
        console.log("Edad valida");
        mostrarTexto("lblErrorEdad","");
    }else{
        errorEdad = "La edad debe estar entre 0 y 100 anios";
        mostrarTexto("lblErrorEdad",errorEdad);
    }

    if(errorNombre == "" & errorEdad==""){
        let nuevaPersona = {};
        nuevaPersona.nombre = valorNombre;
        nuevaPersona.edad = valorEdad;
        personas.push(nuevaPersona);
        console.log("Persona agregada");
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }else{
        alert("ALGO FALLO, INTENTE NUEVAMENTE");
    }
    
}

mostrarPersonas = function(){
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table><tr><th>EDAD</th>" +
        "<th>NOMBRE</th></tr>";
    for (i = 0; i < personas.length; i++) {
        let elementoPersona = personas[i];
        contenidoTabla += "<tr><td>" + elementoPersona.edad + "</td>" +
            "<td>" + elementoPersona.nombre + "</td>" ;
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}