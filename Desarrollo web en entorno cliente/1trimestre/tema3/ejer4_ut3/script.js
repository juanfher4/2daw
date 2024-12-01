vector = [4, 8, 3, -9, 8.5]

for (let i = 0; i < vector.length; i++) {
    
    if (vector[i] === parseInt(vector[i]) && vector[i] >= 0) {
        console.log("Es entero positivo.")
    } else {
        console.log("No es entero positivo.")
    }

}

porTres = []

for (let i = 0; i < vector.length; i++) {
    
    porTres.push(vector[i] * 3)

}

console.log(porTres)

cont = 1
producto = 1

for (let j = 0; j < porTres.length; j++) {
    
    producto *= cont
    cont = porTres[j]

}

console.log(producto)
