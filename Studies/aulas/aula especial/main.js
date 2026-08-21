//  let a = document.getElementById('area')
//         a.addEventListener('click', clicar)
//         a.addEventListener('mouseenter', entrar)
//         a.addEventListener('mouseout', sair)



//         function clicar(){

//             a.innerHTML = "Sheila Nina"
//              a.style.transition = ".9s" 
//                 a.style.backgroundColor = "black"
//                 a.style.borderRadius = "50px 0 50px 0"




//         }

//         function entrar(){


//                 a.innerHTML = "I miss u"
//                 a.style.transition = ".5s" 
                
//                   a.style.transition = ".5s" 
//                 a.style.backgroundColor = "yellow"

//         }

//         function sair(){

//             a.innerHTML = "See u."
//             a.style.transition = ".5s" 
//             a.style.backgroundColor = "red"
//             a.style.borderRadius = "0"
            

//         }

//         function somar(){

//            let tn1 =document.getElementById("txt1")
//            let tn2 =document.getElementById("txt2")
//            let n1 = Number((tn1.value))
//            let n2 = Number((tn2.value))
//            let s = n1+n2
//            let res = document.getElementById("res")
//            res.style.padding ='20px'
//            res.innerHTML =`O resultado de ${n1} + ${n2} e de ${s}`

//         }

 
        // document.querySelector()
        // addEventListener('click',()=>{})
        // classList.togglea()


// <=================================================================>

    // # <========== PEGAR OS ELEMENTOS DOM ==================>
    // const btnMenu = document.getElementById('btnMenu')
    //  const btnTema = document.getElementById('btnTema')
    // const temaSalvo = localStorage.getItem('tema')
    // const btnTitulo = document.getElementById('btnTitulo')
    // const menu = document.querySelector('.menu')
    //  const body = document.querySelector('body')
    // const titulo = document.querySelector('.titulo')
    // const btn = document.getElementById('btnMenu')
    // const nav = document.querySelector('.navMenu')
    const input = document.querySelector('#nome')
    const  btn = document.querySelector('#btnEnviar')
    const  res = document.querySelector('#resultado')
    const nomeUser = localStorage.getItem('form') //Pega a info da gaveta do navegador
    

    btn.addEventListener('click', ()=>{

     

       const nome = input.value //Pega o que digitou
       localStorage.setItem('form', nome) //Guarda a info na gaveta do navegador
       res.textContent = `Olá, ${nome}!` // Mostra na tela 


       
       
       //.value pega o que foi digitado
       
       
      })
      
      if(nomeUser) {

       res.textContent = `Bem-vindo de volta, ${nomeUser}`



      }



      // # <========== ABRIR MENU ==================>
    
        // btnMenu.addEventListener('click', ()=>{

        //     menu.classList.toggle('aberto')
            



        // })

       // <========== DARK MODE ==================>

        // btnTema.addEventListener('click', ()=>{

        //     body.classList.toggle('escuro')
        //    if(body.classList.contains('escuro')){


        //          btnTema.textContent = "Light Mode"
        //          localStorage.setItem('tema', 'escuro')


        //    } else{


        //        btnTema.textContent = "Dark Mode"
        //         localStorage.setItem('tema', 'claro')

        //    }



        // })

        //  if (temaSalvo === 'escuro'){

        //      body.classList.add('escuro')
        //     btnTema.textContent = "Light Mode"

        //  } 


        //  // # <========== ESCONDER TITULO ==================>

        //     btnTitulo.addEventListener('click',()=>{

        //         titulo.classList.toggle('sumir')

        //     })



        

 

         // # <========== PRATICA ==================>


            // btn.addEventListener('click', ()=>{

            //     nav.classList.toggle('activo')

            // })



