function dni() {
    
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    
    let dni = document.getElementById("dni").value

    let num_dni = dni.slice(0, -1)
    let letra_dni = dni.slice(-1)
    
    if (num_dni < 0 || num_dni > 99999999 || num_dni < 9999999) {
        document.getElementById("resultado").innerHTML = "El número proporcionado no es válido."
    } else {
        let letra = letras[num_dni % 23]
        if (letra === letra_dni) {
            document.getElementById("resultado").innerHTML = "La letra es correcta."
        } else {
            document.getElementById("resultado").innerHTML = "La letra no es correcta. La correcta es " + letra + "."
        }
    }

    document.getElementById("resultado1").innerHTML = num_dni
    document.getElementById("resultado2").innerHTML = letra_dni

}
