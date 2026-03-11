 let valores = [8, 1, 7, 4, 2, 9]
// //console.log(valores)

// for (pos = 0; pos <valores.length ; pos++){


//     console.log(`A posicao  ${pos} tem valor ${valores[pos]}`)
// }


// for(let pos in valores){

//     console.log(valores[pos])

// }


let pos = valores.indexOf(0)
console.log(valores)

if(pos == -1){
    
    console.log('o valor nao  foi encontrado')
} else{
    
    console.log('valor esta na posicao ' + pos)


}
