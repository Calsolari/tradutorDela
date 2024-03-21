'use strict'

const botaoTema = document.getElementById('button')

function mudarTema() {
    
    botaoTema.classList.toggle('temaEscuro')


}

botaoTema.addEventListener('click', mudarTema)

