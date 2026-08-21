# Eventos DOM é tudo que pode acontecer com um elemento

mouseenter 
mousemove
mousedown
mouseup
mouseout
click

        
        onclick="clicar()"
        onmouseenter="entrar()"
        onmouseout="sair()"
            
        em vez de usar isso , podemos usar isso:
        a.addEventListener('', )


        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)


JS DOM Event reference


# Funcoes e um conjunto de linhas ou blocos que vao funcionar so quando o evento ocorrer.


# ClassList - Controle remoto do CSS
    Serve para ligar e desligar as classes do CSS
    Para isso podemos usar da segunte forma:

    add - activa
    remove - desactiva
    toggle - faz os dois, activa e desactiva
    contains - ??

    elemento.ClassList.add('ativo')
    elemento.ClassList.remove('ativo')
    elemento.ClassList.toggle('ativo')


