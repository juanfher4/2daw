function mostrar() {

    let num = document.getElementById("num").value
    let cont = 1
    let suma = 1

    for (let i = 0; i < num.length; i++) {

        if (!isNaN(num[i])) {

            suma += cont
            cont = num[i]

        }

    }

    document.getElementById("resultado").innerHTML = suma

}

mostrar()
