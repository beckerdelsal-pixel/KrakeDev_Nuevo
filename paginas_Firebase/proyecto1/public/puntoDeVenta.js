calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    //let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");

    esProductoValido = function (nombreProducto, idComponenteError) {
        let hayError = false;
        if (nombreProducto == "") {
            hayError = true;
            mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
        }
        if (nombreProducto.length > 10) {
            hayError = true;
            mostrarTexto(idComponenteError,"EL NOMBRE DEBE TENER MAXIMO 10 CARACTERES");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError," ");
        }
        return !hayError;
    }
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    esCantidadValida = function (cantidad,idComponenteError) {
        let hayError = false;
        if (isNaN(cantidad)) {
            mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
            hayError = true;
        }
        if (cantidad == "") {
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            hayError = true;
        }
        if (cantidad <= 0 || cantidad > 100) {
            mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER MINIMO 1 Y MAXIMO 100");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError, " ");
        }
        return !hayError;
    }
    //2. Recuperar el precio como float
   
    precioProducto = recuperarFloat("txtValor");
    esPrecioValido = function (precioProducto,idComponenteError) {
        let hayError = false;
        if (isNaN(precioProducto)) {
            mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
            hayError = true;
        }
        if (precioProducto == "") {
            mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
            hayError = true;
        }
        if (precioProducto <= 0 || precioProducto > 50) {
            mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER MAXIMO 50");
        }
        if (hayError == false) {
            mostrarTexto(idComponenteError, " ");
        }
        return !hayError;
    }
    if (esProductoValido(nombreProducto,"lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal)
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        let subtotal = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(subtotal);
        valorIVAF = valorIVA.toFixed(2);
        mostrarTexto("lblIVA", valorIVAF);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        valorTotalF = valorTotal.toFixed(2);
        mostrarTexto("lblTotal", valorTotalF);
    }

    //4. Recuperar el porcentaje de descuento como int
    // porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto

    /*
    Caso de prueba: 
        - cantidad: 10
        - precioProducto: 5.4  
        Subtotal esperado: 54
    Si el caso de prueba es exitoso, hacer un commit
 */
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    //7. Mostrar el resultado en el componente lblDescuento

    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    

    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10

                - valorSubtotal: 54
                - descuento:5.4
                - valorSubtotal 
                - descuento: 48.6

            IVA esperado: 5.832

        Si el caso de prueba es exitoso, hacer un commit
    */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal

    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    //let resumen = "Valor a pagar por "+cantidad+ " "+nombreProducto+ " con "+ porcentajeDescuento+"%" + " de descuento: USD $"+valorTotalF;
    // mostrarTexto("lblResumen",resumen);
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtValor", "");
    // mostrarTextoEnCaja("txtPorcentajeDescuento","0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    //  mostrarTexto("lblResumen","");
}
/* SI TODO FUNCIONA, HACER UN PUSH */