function GerarTabuada(){


    let t = document.getElementById('txttab')
    let s = document.getElementById('seltab')

    if (t.value.length == ''){
         alert('[ERRO] digite um numero.')
        
        
    } else{
        
       let num = Number(txttab.value)

    
      s.innerHTML = ''
       for(let c = 1; c <=12; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            s.appendChild(item)

       }


    }


}