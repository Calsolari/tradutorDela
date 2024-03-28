'use strict'

const entrada = document.getElementById("entrada")
const traducaoinput = document.getElementById("traducao")

const traduzir = async (texto) => {
    const url = `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|en`
    const response = await fetch(url) 
    const data = await response.json()
    return data.responseData.translatedText
}

const montarTraducao = async () => {
    const traducao = await traduzir(entrada.value)
    traducaoinput.value = traducao
}

entrada.addEventListener('change', montarTraducao)