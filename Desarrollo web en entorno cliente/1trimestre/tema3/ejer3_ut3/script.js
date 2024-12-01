let valores = [true, 5, false, "hola", "adios", 2]
let strings = []
let booleans = []
let numbers = []

// Strings
for (let i = 0; i < valores.length; i++) {
    let valor = valores[i]
    
    if (typeof valor == "string") {
        strings.push(valor)
    } else if (typeof valor == "boolean") {
        booleans.push(valor)
    } else if (typeof valor == "number"){
        numbers.push(valor)
    }

}

if (strings[0] > strings[1]) {
    console.log(strings[0], "es más grande que", strings[1])
} else {
    //document.getElementById("resultado2").innerHTML = strings[1], "es más grande que", strings[0]
    console.log(strings[1], "es más grande que", strings[0])
}

// Booleans
let resultado_1 = booleans[0] && booleans[1]
let resultado_2 = booleans[0] || booleans[1]

console.log(resultado_1)
console.log(resultado_2)

// Numbers
let num1 = numbers[0]
let num2 = numbers[1]

let suma = num1 + num2
let resta = num1 - num2
let producto = num1 * num2
let division = num1 / num2

console.log(`${num1} + ${num2} = ${suma}`)
console.log(`${num1} - ${num2} = ${resta}`)
console.log(`${num1} * ${num2} = ${producto}`)
console.log(`${num1} / ${num2} = ${division}`)

/* 
console.log(strings)
console.log(booleans)
console.log(numbers)
*/
