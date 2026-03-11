function carregar() {


let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let hora =  20
msg.innerHTML = "Agora são " + hora + " horas."


if(hora >=0 && hora < 12){

    img.src = 'manhã.JPG'
    document.body.style.background = '#e2cd9f'
    
}else if(hora >=12 && hora <18){

    img.src = 'tarde.JPG'  
    document.body.style.background = '#b9846f'


}else{

    img.src = 'noite.JPG'
    document.body.style.background = '#515154'
}

}
