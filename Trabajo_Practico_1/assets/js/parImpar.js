let parImpar = Number(prompt("Escriba un número: "))

if (parImpar % 2 == 0) {
    console.log ("El número: ", parImpar, "es ", "par");
} else if (parImpar % 2 == 1) {
    console.log ("El número: ", parImpar, "es ", "impar");
} else {
    console.log ("Ingresar un número válido")
}