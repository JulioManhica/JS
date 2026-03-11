function verificar() {

let txtn = document.getElementById('txtn')
let msg = document.getElementById('msg')
let data = new Date()
let ano = data.getFullYear()

if (txtn.value.length == 0 || txtn.value > ano  ){


      alert ('[ERRO]Verfique os dados e tente novamente!')
} else {

      let idade = ano - Number (txtn.value)
      let genero = ""
      let sexo = document.getElementsByName('radsex')
      let img = document.createElement ('img')
      img.setAttribute ('id','foto')
      
      

      if (sexo[0].checked ){

            genero = "Homem"

            if (idade >= 0 && idade < 3){

            img.setAttribute ('src','bebeh.PNG')

             } else if (idade < 18){

            img.setAttribute ('src','criancah.PNG')
             } else if (idade < 39) {

                  img.setAttribute ('src','jovemh.PNG')


             } else if (idade < 59) {


                  img.setAttribute ('src','adulto.PNG')

             } else {

                  img.setAttribute ('src','idoso.PNG')
             }


      } else {

            genero = "Mulher"

             if (idade >= 0 && idade < 3){

            img.setAttribute ('src','bebem.PNG')

             } else if (idade < 18){

            img.setAttribute ('src','criancam.PNG')
             } else if (idade < 39) {

                  img.setAttribute ('src','jovemm.PNG')


             } else if (idade < 59) {


                  img.setAttribute ('src','adulta.PNG')

             } else {

                  img.setAttribute ('src','idosa.PNG')
                   msg.innerHTML =   `Detectamos uma ${genero} idosa com ${idade} anos `
             }


            
            
      
            
      }

      // msg.innerHTML =   `Detectamos um ${genero} com ${idade}anos `
      msg.appendChild(img)
      
}




}