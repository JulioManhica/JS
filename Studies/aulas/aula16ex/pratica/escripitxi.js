let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let msg = document.getElementById('msg')
let valores = []


function validarNumero (n){

    if ( Number(n) >= 1 && Number(n) <= 100 ) {
    
        return true

    }   else {

            return false

        }
}


function naLista (n, l){

    if (l.indexOf(Number(n)) != -1  ){


        return true

    }  else {

            return false

        }

}


function adionar() {
    
if( validarNumero(num.value) && !naLista(num.value, valores) ){

    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.innerText = `  Valor ${num.value} adicionado `
    lista.appendChild(item)
    
    

    


}   else{

    alert('[ERRO] valor invalido ou ja inserido na lista')

}

num.value = ''
num.focus()


}


function finalizar(){

    if(lista.length == 0){

        alert('[ERRO] adicione um numero na lista')

    }   else {

        let tot  = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0


        for ( let pos in valores){

            

        }

    }



}