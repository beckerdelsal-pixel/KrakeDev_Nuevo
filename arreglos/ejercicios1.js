let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
probarAgregar = function(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
recorrerArreglo = function(){
    let notaR;
    for (let i=0; i <notas.length;i++){
        notaR = notas[i];
        console.log(notaR);
    }
}

agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
}

calcularPromedio = function(){
    let sumaNotas =0;
    let promedio;
    for (let i =0;i<notas.length;i++){
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;
    let promedioF = promedio.toFixed(2);
    return promedioF;
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla ="";
    contenidoTabla +="<table><tr><th>NOTAS</th></tr>"
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota = notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

generarTabla = function(){
    let contenidoTabla ="";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarPromedio = function(){
    let promedio = calcularPromedio();
    mostrarTexto("lblPromedio",promedio);
}