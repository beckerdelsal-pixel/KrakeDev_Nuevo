calcularValorDescuento = function(monto, porcentajeDescuento){
    let valor1;
    let valorDescuento;
    valor1 = monto * porcentajeDescuento;
    valorDescuento = valor1 / 100;
    return valorDescuento;
}
calcularIVA = function(monto){
    let valorIVA;
    valorIVA = monto * 0.12;
    return valorIVA;
}
calcularSubtotal = function(precio, cantidad){
    let subtotal;
    subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function(subtotal, descuento, iva){
    let total = (subtotal - descuento)+ iva;
    return total;
}