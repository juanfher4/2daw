var num = parseInt(prompt("Dame un número entero y hago su factorial"));
var num_final = 1;

for (i=num ; i>=1 ; i--) {
    num_final *= i
}

alert("El factorial de " + num + " es: " + num_final)
