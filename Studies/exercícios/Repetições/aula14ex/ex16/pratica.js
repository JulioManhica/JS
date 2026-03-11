function Contar() {

let i = document.getElementById('txti')
let f = document.getElementById('txtf')
let p = document.getElementById('txtp')

if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ){

    alert('[ERRO] digite um num')

} else{

    let inicio = Number(i.value)
    let fim = Number(f.value)
    let passo = Number (p.value)
    let res = document.getElementById('res')
    res.innerHTML = `Contando:`

    if(inicio < fim){


        for(ini = inicio; ini <= fim; ini += passo){

            res.innerHTML += `${ini} `

        }



    } else {

        for(ini = inicio; ini >= fim; ini -= passo){

            res.innerHTML += `${ini} `

        }


    }

}



}