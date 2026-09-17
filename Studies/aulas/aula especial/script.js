let marcacoes = []
let proximoId = 1

function agendar (nome, hora){

        const novaMarcacao = {

            id:proximoId,
            nome: nome,
            hora:hora,
            status: "Pendente"
        
        }

        marcacoes.push(novaMarcacao)
        proximoId++
        console.log("Marcado",novaMarcacao)

}

    agendar("Joao", "09:30")
    console.log(marcacoes)


    function listarMarcacoes (){


        console.log("--- LISTA DE MARCACOES ---")
        marcacoes.forEach(marcacao=>{

            console.log(`${marcacao.id} - ${marcacao.nome} as ${marcacao.hora} | Status: ${marcacao.status}`)

        })

    }

    agendar("Sheila","10:30")
    listarMarcacoes()


    function actualizarStatus(id, novoStatus){

        let = marcacao = marcacoes.find(m => m.id === id)

        if(marcacao){

            marcacao.status = novoStatus
            console.log("Status actualizado:", marcacao)

        } else {

            console.log("Marcacao nao encontrada")

        }


    }

    agendar("Jonas", "9:30")
    agendar("Daniel", "10:30")
    console.log("--- ANTES ---")
    listarMarcacoes()

    actualizarStatus(1,"Atendido")

    console.log("--- DEPOIS ---")
    listarMarcacoes()

    actualizarStatus(3, "Atendido")
    listarMarcacoes()


    function cancelarMarcacao(id){

        let indice = marcacoes.findIndex(m=>m.id === id)

        if(indice !== -1){

            marcacoes.splice(indice, 1)
            console.log("Marcacao cancelada com sucesso")
        } else{

            console.log("Marcacao nao encontrada")

        }

    }


    cancelarMarcacao(1)
    console.log("-- LISTA FINAL ---")
    listarMarcacoes()