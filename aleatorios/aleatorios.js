let aleatorios = [];
numero=function(){
    let aleatorio;
    aleatorio = Math.random() * 100;
    let sumado = aleatorio +1;
    let entero = parseInt(sumado);
    console.log(entero);
    return entero;
}
generarAleatorios = function(){
    
    let tamano = recuperarTexto("txtTamanio");
    if (tamano >= 5 && tamano <=20){
        for(let i = 0; i<tamano; i++){
            console.log(i);
            let retorno = numero();
            aleatorios.push(retorno);
        }
        mostrarResultados(aleatorios)
    }
}
mostrarResultados = function(arregloNumeros){
    let cmpTabla;
    let contenidoTabla ="";
    let valor;
    cmpTabla = document.getElementById("tabla");
    contenidoTabla += "<table><tr><th>NUMERO ALEATORIO</th></tr>"
    for(let i=0; i<arregloNumeros.length;i++){
        valor = aleatorios[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += valor;
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla+= "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}