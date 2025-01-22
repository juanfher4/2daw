function rotarCarta() {
    const cartaIMC = document.querySelector(".col.carta-box")
    cartaIMC.querySelector(".carta").style.transform = "rotateY(180deg)"
}

function calcularIMC(event) {
    // Esto es para que no se vuelva automáticamente al formulario
    event.preventDefault()

    var altura = parseFloat(document.getElementsByName("altura")[0].value)
    var peso = parseFloat(document.getElementsByName("peso")[0].value)


    var imc = peso / (altura * altura)

    if (imc < 16.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC infrapeso (delgadez severa) " + imc.toFixed(2)
    } else if (imc < 17.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC infrapeso (delgadez moderada) " + imc.toFixed(2)
    } else if (imc < 18.50) {
        document.getElementById("resultado_imc").innerHTML = "IMC infrapeso (delgadez aceptable) " + imc.toFixed(2)
    } else if (imc < 25.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC Peso normal " + imc.toFixed(2)
    } else if (imc < 30.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC Sobrepeso " + imc.toFixed(2)
    } else if (imc < 35.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC Obeso (Tipo I) " + imc.toFixed(2)
    } else if (imc < 40.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC Obeso (Tipo II) " + imc.toFixed(2)
    } else if (imc > 40.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC Obeso (Tipo III) " + imc.toFixed(2)
    } else {
        document.getElementById("resultado_imc").innerHTML = "Error, vuelve al formulario"
    }

    rotarCarta("carta-box-icm")

}

function rotarCarta(cartaClass) {
    const carta = document.querySelector(`.${cartaClass} .carta`);
    if (carta) {
        carta.style.transform = "rotateY(180deg)"
    }
}

function calcularFCM(event) {
    // Esto es para que no se vuelva automáticamente al formulario
    event.preventDefault()

    var edad = parseFloat(document.getElementsByName("edad")[0].value)
    var sexo = document.getElementsByName("sexo")[0].value
    let fcm

    if (sexo === "masculino") {
        fcm = 220 - edad
    } else {
        fcm = 226 - edad
    }

    document.getElementById("resultado_fcm").innerHTML = "FCM: " + fcm

    rotarCarta("carta-box-fcm")

}

function calcularCategoria(event) {
    // Esto es para que no se vuelva automáticamente al formulario
    event.preventDefault()

    var año = document.getElementsByName("nacimiento")[0].value

    if (año >= 2017) {
        document.getElementById("resultado_categoria").innerHTML = "Micros"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2015) {
        document.getElementById("resultado_categoria").innerHTML = "Prebenjamin"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2012) {
        document.getElementById("resultado_categoria").innerHTML = "Benjamín"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2010) {
        document.getElementById("resultado_categoria").innerHTML = "Alevín"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2008) {
        document.getElementById("resultado_categoria").innerHTML = "Infantil"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2006) {
        document.getElementById("resultado_categoria").innerHTML = "Juvenil"
        rotarCarta("carta-box-categoria")
    } else if (año >= 2004) {
        document.getElementById("resultado_categoria").innerHTML = "Junior"
        rotarCarta("carta-box-categoria")
    } else {
        document.getElementById("resultado_categoria").innerHTML = "Senior"
        rotarCarta("carta-box-categoria")
    }

}
