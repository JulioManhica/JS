//TESTE A CADA PASSO QUE FOR DAR

function Verificar(){

    let data = new Date () //pega a data/ano actual

    let ano = data.getFullYear()

    let fano = document.getElementById('txtano')

    let res = document.getElementById('res')

    
    // essa condicao verifica se o ano e maior que o atual ou se o valor do campo for 'vazio'

    if(fano.value.length == 0  || fano.value > ano ) {

        alert(`[ERRO] Verfique os dados e tente novamente`)

    } else {

        let sexo = document.getElementsByName('radsex')

        // Calcular a idade, nao esquecer de converter o valor do campo 
        let idade = ano - Number(fano.value)

        let genero = '' //vai comecar vazia

        ///////////////////////////////////////////////////
        //Cria elemento de forma dinamica
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        //////////////////////////////////////////////////////



        //Depois dessa condicao for verdadeira, ela recebe valor
        if (sexo[0].checked ){
            
            genero = `Homem`

            if(idade >=0 && idade <10){
                
                img.setAttribute('src','criancah.PNG')
                
            } else if (idade < 21){

                img.setAttribute('src','jovemh.PNG')
            } else if (idade< 50 ){

                img.setAttribute('src','adulto.PNG')
            } else{


                img.setAttribute('src',' idoso.PNG')
            }

           

            
        } else {

            genero = `Mulher`

            
            if(idade >=0 && idade <10){
                
                  img.setAttribute('src','criancam.PNG')
                
            } else if (idade < 21){
                
                // Jovem
                img.setAttribute('src','jovemM.PNG')
            } else if (idade< 50 ){

                // adulto
                img.setAttribute('src','adultA.PNG')


            } else{


                //idoso
                img.setAttribute('src',' idosA.PNG')
            }

        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.style.textAlign = 'center'
        res.appendChild(img)// adiciona a imagem criada de forma dinamica


        
    }



   
}