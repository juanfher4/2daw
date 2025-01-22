// Clases

// 1. Crea una clase que reciba dos propiedades // 2. Añade un método a la clase que utilice las propiedades

class Jedi {

    constructor(name, birth) {
        this.name = name,
        this.birth = birth
    }

    speaks() {
        console.log(`Me llamo ${this.name} y nací el ${this.birth}`)
    }

    static sum(a, b) {
        return a + b
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función

let jedi = new Jedi("Yoda", "896 ABY")

console.log(jedi.name)
console.log(jedi.birth)
jedi.speaks()
console.log("")

// 4. Añade un método estático a la primera clase

/* 
Añado:
static sum(a, b) {
        return a + b
    }
*/

// 5. Haz uso del método estático

console.log(Jedi.sum(4, 9))
console.log("")

// 6. Crea una clase que haga uso de herencia

class Padawan extends Jedi {

    constructor(name, birth, height) {
        super(name, birth)
        this.height = height
    }

}

let padawan = new Padawan("Dooku", "102 ABY", 1.93)

console.log(padawan.name)
console.log(padawan.birth)
console.log(padawan.height)
console.log("")

// 7. Crea una clase que haga uso de getters y setters // 8. Modifica la clase con getters y setters para que use propiedades privadas

class Sith {

    #name
    #birth
    #height

    constructor(name, birth, height) {
        this.#name = name
        this.#birth = birth
        this.#height = height

    }

    get name() {
        return this.#name
    }
    get height() {
        return this.#height
    }

    set height(height) {
        this.#height = height
    }

    use_force() {
        console.log("Usa la fuerza")
    }

}

// 9. Utiliza los get y set y muestra sus valores

let sith = new Sith("Darth Vader", "41 ABY", 2.03)

console.log(sith)
console.log(sith.name)
console.log(sith.birth) // Birth va a mostrar undefinded porque no está hecho el getter
console.log(sith.height)
sith.height = 2.04
console.log(sith.height)
console.log("")

// 10. Sobrescribe un método de una clase que utilice herencia 

sith.use_force()

class Aprendiz extends Sith {

    constructor(name, birth, height, midichlorians) {
        super(name, birth, height)
        this.midichlorians = midichlorians
    }

    use_force() {
        console.log("Usa mucho la fuerza")
    }

}

let aprendiz = new Aprendiz("Starkiller", "19 ABY", 1.85, 22000)
aprendiz.use_force()
