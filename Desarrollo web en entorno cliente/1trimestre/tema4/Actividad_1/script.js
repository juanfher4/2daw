/* 
Práctica 6.1: Objetos de tipo Punto

• Queremos crear objetos que representen puntos, de ellos necesitamos:

- Que tengan dos propiedades: xey. Servirán para representar las coordenadas del punto.             *

- La construcción de los puntos usará una función constructora a la que se le pasan dos números. 
Si lo que recibe en cada coordenada no es un número, se coloca a cero.              *

- Un método llamado cambiar al que le pasamos dos números y nos permite modificar las coordenadas del número.                *

- Un método llamado copia que retorna una copia del objeto.

- Un objeto llamado iguales que recibe un segundo punto y nos dice si ambos puntos son iguales.

- Un método llamado suma que recibe un segundo punto y devuelve un tercer punto resultado de sumar las coordenadas de los dos anteriores.               *

- Finalmente un método llamado toString que retorna un texto con las coordenadas del punto. Por ejemplo (-5,2)                  *
*/

class Punto {

    constructor(x = 0, y = 0) {
        this.x = x,
        this.y = y
    }

    cambiar(num_x, num_y) {
        this.x = num_x
        this.y = num_y
    }

    copia() {
        return new Punto(this.x, this.y)
    }

    iguales(punto) {
        if (punto.x == this.x || punto.y == this.y) {
            return "Son iguales"
        } else {
            return "No son iguales"
        }
    }

    suma(num_x, num_y) {
        let suma = num_x + num_y
        return suma
    }

    toString() {
        return `(${this.x},${this.y})`
    }

}



let punto = new Punto(5, 2)
let copia = punto.copia()

console.log(copia.toString())

console.log(punto.cambiar(copia.x,copia.y))

console.log(punto.iguales(copia))

console.log(punto.suma(punto.x,punto.y))

console.log(punto.toString())
