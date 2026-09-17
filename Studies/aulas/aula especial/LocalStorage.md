###### LOCALSTORAGE ######## 

     Serve para salvar dados no navegador. Mesmo se actualizar a página, não perde.

    localStorage.setItem('chave', valor) // Guardar
    Explicação:
        ('nome da memoria do navegador', valor a ser guardado na memoria do navegador )

    const nome = localStorage.getItem('nomeMemoria') // Pegar

# Observacao
    o localStorage so salva Strings


######  5 Comandos do localStorage ######

    1. setItem => Guardar
    2. getItem => Pegar
    3. removeItem => Apagar um item especifico
    4. clear() => Limpar
    5. key(0) e length => Ver o que tem

    localStorage.setItem('chave', JSON.stringify(chave)) => para guardar um objecto 
    var objecto = JSON.parse(var chave) => para pegar um objecto

    NB:O JSON.stringify e JSON.parse só usamos quando se tratam de arrays/objectos porque por si so eles nao sao textos.