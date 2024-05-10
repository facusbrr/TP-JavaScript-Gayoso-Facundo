let articulos = parseInt (prompt("Incluya los articulos comprandos: "))
let precioTotal = parseInt (prompt("El precio de la compra"))

if (isNaN(articulos) || isNaN(precioTotal)){
    console.log ("Tienen que ser de tipo número")
}else if(precioTotal <= 0 || articulos <= 0){
    console.log ("El número tiene que ser mayor a 0")
}
else if (articulos >= 10 && precioTotal > 20000){
    let descuento = precioTotal * 0.15;
    console.log ("Se aplicó el descuento del 15%", "su descuento es" ,precioTotal - descuento)
}else{
    console.log ("No se aplicó el descuento","." ,"El precio total es: ", precioTotal)
}