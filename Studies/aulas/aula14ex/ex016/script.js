function Contar(){

let inicio = document.getElementById('ini')
let fim = document.getElementById('end')
let passo = document.getElementById('pass')
let msg = document.getElementById('msg')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

    alert(`[ERRO] preencha os campos vazios`)


} else {

    msg.innerHTML = `Contando:`
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p<=0){
        alert (`Impossivel!!`)
        p=1
    }
   
if(i<f){

    //Contagem crescente
    for (c = i ; c <= f ; c += p ){


        msg.innerHTML += ` ${c}`
    }


                        } else {



    //Contagem decrescente
    for (c = i ; c >= f ; c -= p ){


        msg.innerHTML += ` ${c}`




                        }




}



}

}