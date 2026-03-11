// Este script tem o objetivo de coletar números de 1 a 100 de um formulário, armazená-los e, ao finalizar, realizar algumas análises estatísticas básicas (total, maior, menor, soma e média)


let num = document.getElementById('fnum')//[1.1]Campo de texto para digitar o número (ID: fnum)
let lista = document.getElementById('flista')//[1.2]Lista (select)onde os números adicionados serão mostrados (ID: flista)
let msg = document.getElementById('msg')//[1.3] Área (geralmente uma div) onde o resultado final será exibido (ID: msg)
let valores = [] // [1.4] Array (lista) VAZIA que vai guardar TODOS os números válidos que o usuário digitar.

// #############################################################
// Nao correr com o codigo, testar sempre.



//2. Funções de Validação (As Regras do Jogo)
//Essas duas funções servem para verificar se o número digitado pelo usuário é aceitável, antes de adicioná-lo à lista valores.

function isNumero (n){  //Esta função verifica se o valor passado (n) é um número válido, ou seja, se está entre 1 e 100.

    if(Number(n) >= 1 && Number(n) <=100){ // Verifica se o número (convertido) é >= 1 E <= 100

        return true  // Se for, retorna verdadeiro (válido)
    

    }else {

        return false // Se não for, retorna falso (inválido)

    } 


}


//Esta função verifica se o número passado (n) JÁ ESTÁ na lista de valores (l) que já foram adicionados.
function inLista (n, l){

    // O método .indexOf(item) retorna a posição do 'item' em um Array.
    // Se o item NÃO for encontrado, ele retorna -1.

    if (l.indexOf(Number(n)) != -1){ // Verifica se a posição do número na lista (l) é DIFERENTE de -1

        return true // Se for DIFERENTE de -1, significa que o número JÁ está na lista

    } else {

        return false // Se for -1, significa que o número AINDA NÃO está na lista
    }

}

// #############################################################
// Nao correr com o codigo, testar sempre.

//3. Função adicionar() (O Botão de Ação Principal)
//Esta função é executada quando o usuário clica no botão "Adicionar". Ela aplica as regras de validação antes de guardar o número.



function adicionar(){

    // Verifica se:
    // 1. O valor digitado é um número válido (entre 1 e 100), E
    // 2. O valor digitado AINDA NÃO está na lista 'valores' (o '!' inverte o resultado do inLista)    

    if(isNumero(num.value) && !inLista(num.value, valores)){

        // Se passar nas duas verificações (valor válido e novo):

        valores.push(Number(num.value)) // [3.1] Adiciona o número (convertido) no array 'valores'.
        let item = document.createElement('option') // [3.2] Cria um novo elemento <option> para a lista visual (flista).
        item.text = `Valor ${num.value} adiconado` // [3.3] Define o texto que aparecerá na lista.
        lista.appendChild(item) // [3.4] Adiciona o novo item criado à lista visual na HTML.
        msg.innerHTML = '' // [3.5] Limpa a área de mensagem (msg), caso ela estivesse mostrando resultados anteriores.

    } else {

        alert(' [ERRO] Valor invalido ou ja encontrado na lista') // Mostra um erro se as verificações falharem.

    }

    num.value = '' // Limpa o campo de entrada (fnum)
    num.focus() // Coloca o cursor de volta no campo, pronto para a próxima digitação.



}

// #############################################################
// Nao correr com o codigo, testar sempre.


//4. Função Finalizar() (O Botão de Processamento)
//Esta função é executada quando o usuário clica no botão "Finalizar". Ela calcula as estatísticas e exibe os resultados na área msg.




function Finalizar(){
 // 4.1. Verificação de Lista Vazia

if(valores.length == 0){ // Verifica se o array 'valores' está vazio

    alert(`Adicione valores antes de finalizarr`) // Sai da função, não executa o resto do código

} else { 

    // 4.2. Início dos Cálculos

    let tot = valores.length // Total de elementos no array
    let maior = valores[0] // Assume que o primeiro elemento é o maior
    let menor = valores[0] // Assume que o primeiro elemento é o menor
    let soma = 0 // Inicializa a soma em zero
    let media = 0 // Inicializa a media em zero


    // 4.3. Loop de Análise (for...in)
    // Percorre cada elemento dentro do array 'valores'
    for(let pos in valores ){
        // Código aqui se repete para cada número na lista 'valores'

        soma += valores[pos] // Soma o valor atual ao total acumulado (soma)

        // Verifica se o valor atual é o maior até agora
        if(valores[pos] > maior)
            maior = valores [pos]


        // Verifica se o valor atual é o menor até agora
        if(valores[pos] < menor)
            menor = valores [pos]

    }

    // 4.4. Cálculo Final e Exibição
    media = soma / tot // Calcula a média
    msg.innerHTML = '' // Limpa a área de mensagem e começa a adicionar os resultados em parágrafos (<p>)
    msg.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados</p> `
    
    msg.innerHTML += `<p> O maior valor informado foi ${maior}.  </p>`
    msg.innerHTML += `<p>O menor valor informado foi ${menor}.   </p>`
    msg.innerHTML += `<p> Somando todos os valores, temos ${soma}.   </p>`
    msg.innerHTML += `<p> A media dos valores digitados e ${media}.   </p>`

}


}

// #############################################################
// Nao correr com o codigo, testar sempre.



//Ações no DOM:

//.value: Pega o texto/número que o usuário digitou no campo de input.

//.innerHTML: Muda o conteúdo HTML de uma área de texto (msg).

//document.createElement: Cria um novo elemento HTML (<option>).

//.appendChild: Coloca o novo elemento criado dentro de outro elemento (adiciona o <option> na sua <select>).



// JavaScript Básico (Estruturas de Dados e Lógica)
// Variáveis (let): Usadas para guardar valores (num, soma, tot).

// Arrays (valores = []): Usados para guardar múltiplos valores em uma lista.

// valores.push(n): Adiciona um item ao final do array.

// valores.length: Diz quantos itens há no array.

// l.indexOf(n): Procura um item no array.



// O Que é um Loop?
// Um loop (laço de repetição) é uma forma de fazer o computador repetir a mesma tarefa várias vezes, economizando linhas de código.


// O Que Faz o for...in?
// O for...in foi projetado para percorrer as propriedades (índices, ou "chaves") de um objeto ou de um Array.

// Parte,O Que Representa,Exemplo na Primeira Repetição
// valores,É o seu Array (a lista de números).,"[20, 50, 80]"
// let pos,"É uma variável que, a cada repetição, guarda o índice (a posição) do item no Array.",pos será 0
// in,"Significa ""dentro de"".",


// Sintaxe,O Que Retorna
// pos,"Retorna o índice/posição (ex: 0, 1, 2, 3...)"
// valores[pos],Retorna o valor que está guardado naquele índice.