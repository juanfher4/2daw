function mostrar() {

    let texto = document.getElementById("texto").value

    let invertido = texto.split("").reverse().join("")

    if (texto == invertido) {
        document.getElementById("resultado").innerHTML = "Es un palíndromo"
    } else {
        document.getElementById("resultado").innerHTML = "No es un palíndromo"
    }

}
