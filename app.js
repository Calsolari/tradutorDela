'use strict'

const botaoTema = document.getElementById('button-theme')

function mudarTema() {
    
    botaoTema.classList.toggle('temaEscuro')
    
    
}

botaoTema.addEventListener('click', mudarTema)
