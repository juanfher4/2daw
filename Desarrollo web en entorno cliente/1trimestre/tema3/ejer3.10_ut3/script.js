let ies = new Map([
    ["DWECL", "Desarrollo Web en Entorno Cliente"]
])

ies.set("DIW", "Diseño de Interfaces Web")
ies.set("HLC", "Horas de Libre Configuración")
ies.set("DAW", "Despliegue de Aplicaciones Web")
ies.set("DWES", "Desarrollo Web en Entorno Servidor")

// Muestro el contenido
console.log(ies)

// Muestro la cantidad de módulos
console.log(`Hay ${ies.size} módulos.`)

// Devuelvo las abreviaturas
console.log(ies.keys())

// Devuelvo el nombre completo de todos los módulos
console.log(ies.values())

// Conculto si está el módulo "DAW"
if (ies.has("DAW") === true) {
    console.log("DAW sí está")
} else {
    console.log("DAW no está")
}
