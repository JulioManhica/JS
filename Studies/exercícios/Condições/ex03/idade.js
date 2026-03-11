function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById ('res')

    if(fano.value.length == 0 || fano.value > ano){

        alert("[Erro] Verifique os dados e tente novamente")

    }else {

        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number (fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('width','300')

        if(fsex[0].checked){
        genero = 'Homem'

        if(idade>=0 && idade <10){

          img.setAttribute('src', 'bebeh.PNG');

        }else if(idade <30){

          img.setAttribute('src','jovemh.PNG');
        }else if(idade < 50){

            img.setAttribute('src','adulto.PNG');
        }else{

            img.setAttribute('src','idoso.PNG');
        }
        
        } else if(fsex[1].checked){

            genero = 'Mulher'
            if(idade>=0 && idade <10){

                img.setAttribute('src', 'bebem.PNG');
      
              }else if(idade <21){
      
                img.setAttribute('src','jovemm.PNG')
              }else if(idade < 50){
      
                  img.setAttribute('src','adulta.PNG')
              }else{
      
                  img.setAttribute('src','idosa.PNG')
              }

        }
        res.style.textAlign = 'center'
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos."
        res.appendChild(img)
       
       
    }

    



}