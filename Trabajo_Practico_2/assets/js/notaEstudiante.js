let primerNota = parseInt(prompt("Escribir la nota del primer trimestre: "));
let segundaNota = parseInt(prompt("Escribir la nota del segundo trimestre: "));
let terceraNota = parseInt(prompt("Escribir la nota del tercer trimestre: "));

let promedio = (primerNota + segundaNota + terceraNota) / 3;

switch (true) {
    case (promedio >= 1 && promedio <= 3):
        console.log("Nota Insuficiente");
        break;
    case (promedio >= 4 && promedio <= 5):
        console.log("Nota Regular");
        break;
    case (promedio >= 6 && promedio <= 7):
        console.log("Nota Buena");
        break;
    case (promedio >= 8 && promedio <= 9):
        console.log("Nota Muy Buena");
        break;
    case (promedio == 10):
        console.log("Nota Sobresaliente");
        break;
    default:
        console.log("Nota no válida");
}
