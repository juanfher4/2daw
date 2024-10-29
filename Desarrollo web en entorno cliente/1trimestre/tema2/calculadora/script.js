do {
    valor = prompt("Pulse 1 para sumar\nPulse 2 para restar\nPulse 3 para multiplicar\nPulse 4 para dividir\nPulse 5 para obtener el módulo\nPulse 6 para salir\nIntroduce un valor");

    if(valor == 1){
        num1 = parseInt(prompt("Dime el primer número: "));
        num2 = parseInt(prompt("Dime el segundo número: "));
        suma = num1 + num2;
        alert("Suma: " + suma);
    } else if(valor == 2){
        num1 = parseInt(prompt("Dime el primer número: "));
        num2 = parseInt(prompt("Dime el segundo número: "));
        resta = num1 - num2;
        alert("Resta: " + resta);
    } else if(valor == 3){
        num1 = parseInt(prompt("Dime el primer número: "));
        num2 = parseInt(prompt("Dime el segundo número: "));
        multi = num1 * num2;
        alert("Multiplicación: " + multi);
    } else if(valor == 4){
        num1 = parseInt(prompt("Dime el primer número: "));
        num2 = parseInt(prompt("Dime el segundo número: "));
        division = num1 / num2;
        alert("División: " + division);
    } else if(valor == 5){
        num1 = parseInt(prompt("Dime el primer número: "));
        num2 = parseInt(prompt("Dime el segundo número: "));
        modulo = num1 % num2;
        alert("Módulo: " + modulo);
    } else if(valor == 6){
        alert("Has salido...");
    } else {
        alert("Introduce un valor correcto");
    }

} while (valor!=6);
