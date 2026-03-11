function GerarTabuada() {


    let num = document.getElementById('txtn')

    let res = document.getElementById('res')


    if(num.value.length == 0){

        alert(`[ERRO!!] \n Por favor, digite um numero.`)

    } else {

        let n  = Number(num.value)
        let n1 = 1

        res.innerHTML = ''
        while (n1 <= 12){


            let item = document.createElement('option')

            item.innerHTML = `${n} x ${n1} = ${n*n1}`

            n1++
            
            res.appendChild(item)
        }

          
    }


}