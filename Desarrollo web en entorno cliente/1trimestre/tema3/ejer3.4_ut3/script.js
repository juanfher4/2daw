let aleatorios = []
let cont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < 10000; i++) {

    let num_random = Math.floor(Math.random() * 10) + 1
    aleatorios.push(num_random)
    cont[num_random - 1]++
    
}

for (let j = 0; j < cont.length; j++) {

    console.log(`Número ${j+1}: ${cont[j]}`)
    
}
