// Desestructuración y propagación

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let characters = ["Yoda", "Luke", "Leia", "Vader"]

let [character0, character1] = characters

console.log(character0)
console.log(character1)
console.log("")

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [character2, character3, character4, character5, character6 = 0] = characters

console.log(character2)
console.log(character3)
console.log(character4)
console.log(character5)
console.log(character6)
console.log("")

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let jedi = {
    name: "Yoda",
    birth: "896 ABY",
    height: 0.66
}

let { name, birth, height } = jedi
console.log(name)
console.log(birth)
console.log(height)
console.log("")

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name2, birth2, height2, midichlorians = 21000 } = jedi
console.log(name2)
console.log(birth2)
console.log(height2)
console.log(midichlorians)
console.log("")

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let sith = {
    name: "Darth Vader",
    birth: "41 ABY",
    height: 2.03,
    usa_fuerza: function () {
        console.log("Usa la fuerza")
    },
    master: {
        name: "Darth Sidious",
        birth: "84 ABY",
        midichlorians: 21000
    }
}

let { master: { name: masterName, birth: masterBirth } } = sith

console.log(masterName)
console.log(masterBirth)
console.log("")

// 6. Usa propagación para combinar dos arrays en uno nuevo

let characters2 = ["Han", "R2-D2", "C3PO", "Chewie"]

let myarray1 = [...characters, ...characters2]

console.log(myarray1)
console.log("")

// 7. Usa propagación para crear una copia de un array

let myarray2 = [...characters2]

console.log(myarray2)
console.log("")

// 8. Usa propagación para combinar dos objetos en uno nuevo

let characters3 = { ...jedi, ...sith }

console.log(characters3)
console.log("")

// 9. Usa propagación para crear una copia de un objeto

jedi2 = { ...jedi }

console.log(jedi2)
console.log("")

// 10. Combina desestructuración y propagación

let jedi3 = { ...jedi, midichlorians: 21000}

console.log(jedi3)
console.log("")
