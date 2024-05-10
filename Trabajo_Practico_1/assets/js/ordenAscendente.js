let numero = {
    uno: Number(prompt ("Ingresar el primer número: ")),
    dos: Number(prompt ("Ingresar el segundo número: ")),
    tres: Number(prompt ("Ingresar el tercer número: "))
}

if (numero.uno <= numero.dos && numero.dos <= numero.tres){
    console.log (numero.uno, numero.dos, numero.tres); //10, 20, 30 = 10, 20, 30

} else if (numero.uno <= numero.tres && numero.tres <= numero.dos){
    console.log (numero.uno, numero.tres, numero.dos); //10, 30, 20 = 10, 20, 30 

} else if (numero.dos <= numero.uno && numero.uno <= numero.tres){
    console.log (numero.dos, numero.uno, numero.tres); //20, 10, 30 = 10, 20, 30

} else if (numero.dos <= numero.tres && numero.tres <= numero.uno) {
    console.log (numero.dos, numero.tres, numero.uno); //30, 10, 20 = 10, 20, 30

} else if (numero.tres <= numero.uno && numero.uno <= numero.dos) {
    console.log (numero.tres, numero.uno, numero.dos); //20, 30, 10 = 10, 20, 30

} else if (numero.tres <= numero.dos && numero.dos <= numero.uno){
    console.log (numero.tres, numero.dos, numero.uno); //30, 20, 10 = 10, 20, 30
} else {
    console.log ("Ingrese un número válido")
}