# ARRAYS
    Podemos considerar um array como uma caixa com gavetas.
    Cada item dentro é uma uma gaveta. E começa no 0.

    Ex : let lista = ["Maria ","Jonas","Artur"] 

    Nesse caso a var  "lista" é uma caixa e cada nome representa uma gaveta [0,1,2]

    Comandos mais usados

    1. CRIAR CAIXA VAZIA
        let listaAlunos []

    2. INSERIR ALGO DENTRO DA CAIXA
        listaAlunos.push("Maria")
        listaAlunos.push("Jonas")

    3. PEGAR TUDO DE VOLTA
        for(let i = 0 ; i < listaAlunos ; i++){

            console.log(listaAlunos[i])

        }

    4. APAGAR UMA GAVETA DA CAIXA

        .splice(indice, 1)
        