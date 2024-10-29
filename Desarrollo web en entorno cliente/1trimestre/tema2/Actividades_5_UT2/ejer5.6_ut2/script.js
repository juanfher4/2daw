
do {
    var nota = prompt("Dime la nota obtenida en el examen. S/s para salir");

    if (nota>=0 && nota<5) {
        alert("Suspenso");
    } else if (nota<7) {
        alert("Aprobado");
    } else if (nota<9) {
        alert("Notable");
    } else if (nota<=10) {
        alert("Sobresaliente");
    } else if (nota<0 || nota>10) {
        alert("Introduce un número entre 0 y 10");
    } else if (nota=="S" || nota=="s") {
        
    } else {
        alert("Introduce un valor numérico");
    }
    
} while (nota!="s" && nota!="S");
