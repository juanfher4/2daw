let loteria = []

for (let i = 0; i < 6;) {

    let random_loteria = Math.floor(Math.random() * 49) + 1
    let bool = true

    for (let j = 0; j < i; j++) {
        if (loteria[j] === random_loteria) {
            bool = false
            break
        }
    }

    if (bool) {
        loteria.push(random_loteria)
        i++
    }

}

console.log(loteria)
