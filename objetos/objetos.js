probarAtributos = function(){
    let persona ={
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre : "Corona",
        precio : 2.00,
        stock : 30,
    }
    let producto2 = {
        nombre : "Amstel",
        precio : 1.50,
        stock : 60,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock > producto2.stock){
        console.log("Producto1 tiene mayor stock");
    }else if(producto2.stock > producto1.stock){
        console.log("Producto2 tiene mayor stock");
    }else if(producto1.stock == producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }
}