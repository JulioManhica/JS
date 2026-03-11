function Tabuada(){

let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

if(num.value.length == 0 ){

 alert('[ERRO], digite um numero.')

} else {

    let n = Number(num.value)
    tab.innerHTML = '' //serve para limpar a tabuada assim que efetuar a outra operacao de modo a nao se juntar com a operacao anterior.


    for(c=1 ; c<=10 ; c++ ){

        let item = document.createElement('option') // Cria um novo elemento de forma dinamica


        item.innerText = `${n} x ${c} = ${n*c}` // Adiciona esse conteudo dentro do select mas antes precisa do Append


        tab.appendChild(item) // finaliza o processo anterior

    }
}

}