function carregar(){


    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    //let data = //new Date()
    let hora = 10//data.getHours()

    msg.innerHTML = `Agora sao ${hora}horas`


    if (hora >= 0 && hora < 12){

        img.src = 'manhã.JPG'
        img.style.borderRadius = '30px'
        document.body.style.background = 'yellow'


    } else if (hora >=12 && hora <18){

        
        img.src = 'tarde.JPG'
        img.style.borderRadius = '30px'
        
    
    
    }else{

        img.src = 'noite.JPG'
        img.style.borderRadius = '30px'
    }


}


