function mostrar() {

    abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "ll", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let texto = document.getElementById("texto").value.toLowerCase()
    let clave = parseInt(document.getElementById("clave").value)
    let texto2 = ""
    let cont = 0

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i]
        for (let j = 0; j < clave.length; j++) {
            let num = clave[j]

            // Compruebo si i está en abecedario por si es un espacio u otra cosa
            if (abecedario.includes(letra)) {
                // Busco la posición de la letra
                let pos1 = abecedario.indexOf(letra)
                let pos2 = pos1 + num
    
                while (pos2 >= abecedario.length) {
                    pos2 -= abecedario.length
                }

                texto2 += abecedario[pos2]
            } else {
                texto2 += letra
            }

            while (num === clave.length) {
                num = 0
            }

        }

    }

    document.getElementById("resultado").innerHTML = texto2

}
