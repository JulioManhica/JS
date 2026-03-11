// let vel = 12

// console.log(`A sua velocidade e de ${vel}km/H`)

// if(vel > 60.5){

//     console.log('Voce foi multado')
// } else {

//     console.log('Cenas legas')
// }

// let pais = 'EUA'

// if(pais == 'BR'){

//     console.log('Brsilerio')
// } else {

//     console.log('Estrangeiro')
// }



function verificar (){
    
    let ve = document.getElementById('vel')
    let res = document.getElementById('res')
    let v = Number(ve.value)
    res.innerHTML = `A sua velocidade e ${v}Km/h, voce foi multado`

    if (v > 100){

        res.innerHTML = `A sua velocidade e ${v}Km/h, voce foi multado`
        res.style.color = 'red'

    } else {


        res.innerHTML = `A sua velocidade e ${v}Km/h, lega `
        res.style.color = 'green'


    }

}