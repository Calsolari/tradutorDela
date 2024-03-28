'use strict'

const botaoTema = document.getElementById('button-theme')
const body = document.getElementById('body')

function mudarTema() {
    
    if(botaoTema.children[0].src.includes('sol')){
        botaoTema.children[0].src = './img/lua.png'
        botaoTema.children[0].alt = 'Lua'
    } else {
        botaoTema.children[0].src = './img/sol.png'
        botaoTema.children[0].alt = 'Sol'
    }
    botaoTema.classList.toggle('tema-escuro')
    body.classList.toggle('tema-escuro')
}

botaoTema.addEventListener('click', mudarTema)
