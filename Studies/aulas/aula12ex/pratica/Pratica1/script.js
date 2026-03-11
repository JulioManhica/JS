function Load(){
    
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let hora = 23
    
    msg.innerHTML = `Agora são ${hora}horas.`


    if(hora >=0 && hora<12){

        document.body.style.background = "rgba(190, 190, 23, 0.596)"
        
        img.src = "manhã.JPG"
        



    } else if( hora >=12 && hora<18){

         document.body.style.background = " rgba(3, 149, 247, 0.74)"
        
        img.src = "tarde.JPG"




    } else {

         document.body.style.background = " rgba(247, 3, 117, 0.74)"
        
        img.src = "noite.JPG"


    }


}