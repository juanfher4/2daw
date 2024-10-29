
do {
    var palabla = prompt("Introduce una de estas palabras y la traduzco (casa/mesa/perro/gato). 'Para salir 0'");

    if (palabla=="casa") {
        alert("house");
    } else if (palabla=="mesa") {
        alert("table");
    } else if (palabla=="perro") {
        alert("dog");
    } else if (palabla=="gato") {
        alert("cat");
    } else if (palabla==0) {
        break
    } else {
        alert("Error. Introduce una palabra correcta")
    }

} while (palabla!=0);
