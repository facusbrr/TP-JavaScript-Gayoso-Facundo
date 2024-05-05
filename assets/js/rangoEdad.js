let pedirEdad = Number(prompt ("Escriba una edad: "));

if (pedirEdad >= 0 && pedirEdad <= 12){
    console.log ("Se encuentra en un rango de edad de un niño");
} else if (pedirEdad >= 13 && pedirEdad <= 19) {
    console.log ("Se encuentra en una edad adolescente");
} else if (pedirEdad >= 20 && pedirEdad <= 59) {
    console.log ("Se encuentra en una edad adulta");
} else if (pedirEdad >= 60) {
    console.log ("Se encuentra en una edad de adulto mayor");
} else {
    console.log ("Ingrese un número válido");
}