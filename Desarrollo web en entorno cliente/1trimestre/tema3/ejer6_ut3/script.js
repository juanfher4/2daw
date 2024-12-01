function valorMenor(valores) {

    let valor_menor = Number.MAX_VALUE

    for (let i = 0; i < valores.length; i++) {
        
        let valor = valores[i];

        if (valor <= valor_menor) {
            valor_menor = valor
        }
        
    }

    console.log(valor_menor)

}

let valores = [4, 3, 6, 1, 9]

valorMenor(valores)
