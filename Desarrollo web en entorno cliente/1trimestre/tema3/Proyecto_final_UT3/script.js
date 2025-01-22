let socios = [
    [ 1, "12345678A", "Diego", "Marín", "2012-08-14", "Mogón", "Benjamín" ],
    [ 2, "23456789B", "Ana", "González", "2016-08-20", "Barcelona", "Micros" ],
    [ 3, "34567890C", "Carlos", "López", "2010-10-19", "Valencia", "Micros" ],
    [ 4, "45678901D", "Maria", "Martínez", "1996-01-07", "Mogón", "Senior" ]
]

function actualizar_tabla() {

    let tbody = document.querySelector("#tbody")
    tbody.innerHTML = ""

    for (let i = 0; i < socios.length; i++) {
        
        // Llamo socio a cada lista
        let socio = socios[i]

        // Le asigno una clave a cada valor
        let num = socio[0]
        let dni = socio[1]
        let nombre = socio[2]
        let apellidos = socio[3]
        let nacimiento = socio[4]
        let localidad = socio[5]
        let categoria = socio[6]


        let fila = document.createElement("tr")
        fila.innerHTML = `<td>${num}</td><td>${dni}</td><td>${nombre}</td><td>${apellidos}</td><td>${nacimiento}</td><td>${localidad}</td><td>${categoria}</td>`
        tbody.appendChild(fila)

    }

}

function categoria(nacimiento) {
    
    let año = nacimiento.substr(0, 4)

    if (año >= 2017) {
        return "Micros"
    } else if (año >= 2015) {
        return "Prebenjamin"
    } else if (año >= 2012) {
        return "Benjamín"
    } else if (año >= 2010) {
        return "Alevín"
    } else if (año >= 2008) {
        return "Infantil"
    } else if (año >= 2006) {
        return "Juvenil"
    } else if (año >= 2004) {
        return "Junior"
    } else {
        return "Senior"
    }

}

function alta(event) {

    event.preventDefault()
    
    let num = socios.length+1
    let dni = document.getElementById("dni").value
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let nacimiento = document.getElementById("nacimiento").value
    let localidad = document.getElementById("localidad").value

    let alta_socio = [ num, dni, nombre, apellidos, nacimiento, localidad, categoria(nacimiento) ]

    socios.push(alta_socio)
    console.log(socios)

    actualizar_tabla()

}

function baja(event) {

    event.preventDefault()

    let num = document.getElementById("num2").value
    console.log(document.getElementById("num2").value)
    for (let i = 0; i < socios.length; i++) {

        if (num == socios[i][0]) {
            socios.splice(i, 1)
            break
        }

    }

    actualizar_tabla()

}

function modificar_localidad(event) {

    event.preventDefault()

    let num = document.getElementById("num3").value
    let localidad = document.getElementById("localidad2").value

    for (let i = 0; i < socios.length; i++) {

        if (num == socios[i][0]) {
            socios[i][5] = localidad
        }
    
    }

    actualizar_tabla()

}

function buscar_por_dni(event) {

    event.preventDefault()

    let mostrar = document.querySelector("#mostrar_por_dni")
    mostrar.innerHTML = ""

    let dni = document.getElementById("dni2").value

    for (let i = 0; i < socios.length; i++) {

        let socio = socios[i]
        let dni_socio = socio[1]

        if (dni_socio == dni) {
            
            mostrar.innerHTML = `<p class="mostrar_p">"${socio[2]} ${socio[3]}" con número: "${socio[0]}", dni: "${dni_socio}", fecha de nacimiento: "${socio[4]}", localidad: "${socio[5]}" y categoría "${socio[6]}"</p>`
        }
    
    }

}

function buscar_por_categoria(event) {

    event.preventDefault()

    let mostrar = document.querySelector(".mostrar_por_categoria")
    mostrar.innerHTML = ""

    let categoria = document.getElementById("categoria2").value

    for (let i = 0; i < socios.length; i++) {
        
        let socio = socios[i]
        let categoria_socio = socio[6]

        if (categoria_socio == categoria) {
            
            mostrar.innerHTML += `<p class="mostrar_p">"${socio[2]} ${socio[3]}" con número: "${socio[0]}", dni: "${socio[1]}", fecha de nacimiento: "${socio[4]}", localidad: "${socio[5]}" y categoría "${categoria_socio}"</p>`
        }

    }

}

function buscar_por_localidad(event) {

    event.preventDefault()

    let mostrar = document.querySelector(".mostrar_por_localidad")
    mostrar.innerHTML = ""

    let localidad = document.getElementById("localidad3").value

    for (let i = 0; i < socios.length; i++) {
        
        let socio = socios[i]
        let localidad_socio = socio[5]

        if (localidad_socio == localidad) {
            
            mostrar.innerHTML += `<p class="mostrar_p">"${socio[2]} ${socio[3]}" con número: "${socio[0]}", dni: "${socio[1]}", fecha de nacimiento: "${socio[4]}", localidad: "${localidad}" y categoría "${socio[6]}"</p>`
        }

    }

}
