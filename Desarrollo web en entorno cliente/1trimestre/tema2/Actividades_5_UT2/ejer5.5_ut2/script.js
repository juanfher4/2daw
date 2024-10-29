var frase = prompt("Dime una frase")

for (let i = 0; i <= frase.length; i++) {
    if (isNaN(frase[i] || frase[i] === " ")) {
        document.write(frase[i] + " ");
        
    }
}
