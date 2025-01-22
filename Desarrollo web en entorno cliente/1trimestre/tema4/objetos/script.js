// Objetos

// 1. Crea un objeto con 3 propiedades

let jedi = {
    name: "Yoda",
    birth: "896 ABY",
    height: 0.66
}

// 2. Accede y muestra su valor

console.log(jedi.name)
console.log(jedi.birth)
console.log(jedi.height)
console.log("")

// 3. Agrega una nueva propiedad

jedi.email = "yoda@g.educaand.es"

mostrar(jedi)

// 4. Elimina una de las 3 primeras propiedades

delete jedi.alias

mostrar(jedi)

// 5. Agrega una función e invócala

jedi = {
    name: "Yoda",
    birth: "896 ABY",
    height: 0.66,
    usa_fuerza: function () {
        console.log("Usa la fuerza")
    }
}

mostrar(jedi)

// 6. Itera las propiedades del objeto

function mostrar(jedi) {
    for (let key in jedi) {
        console.log(key + ": " + jedi[key])
    }
    console.log("")
}

mostrar(jedi)

// 7. Crea un objeto anidado

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

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(sith.master.name)
console.log(sith.master.birth)
console.log(sith.master.midichlorians)
console.log("")

// 9. Comprueba si los dos objetos creados son iguales

console.log(jedi == sith)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(jedi.birth == sith.height)
