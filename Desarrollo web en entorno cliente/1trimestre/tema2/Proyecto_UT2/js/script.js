function rotarCarta() {
    const cartaIMC = document.querySelector(".col.carta-box");
    cartaIMC.querySelector(".carta").style.transform = "rotateY(180deg)";
}

function calcularIMC() {
    // Esto es para que no se vuelva automáticamente al formulario
    event.preventDefault();

    var altura = parseFloat(document.getElementsByName("altura")[0].value);
    var peso = parseFloat(document.getElementsByName("peso")[0].value);


    var imc = peso / (altura * altura);

    if (imc < 16.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC infrapeso (delgadez severa)" + imc.toFixed(2);
    } else if (imc >= 16.00 && imc <17.00) {
        document.getElementById("resultado_imc").innerHTML = "IMC  infrapeso (delgadez moderada)" + imc.toFixed(2);
    } else if (imc >)
/* 
    document.getElementById("resultado_imc").innerHTML = "IMC: " + imc.toFixed(2); */

    rotarCarta()

}

function volver() {
    var cartaIMC = document.querySelector(".carta-box .carta");
    cartaIMC.style.transform = "rotateY(0deg)";
}

function calcularFCM() {
    // Esto es para que no se vuelva automáticamente al formulario
    event.preventDefault();

    var edad = parseFloat(document.getElementsByName("edad")[0].value);
    var sexo = parseFloat(document.getElementsByName("sexo")[0].value);



    document.getElementById("resultado_fcm").innerHTML = "FCM: " + fcm;

    rotarCarta()

}
