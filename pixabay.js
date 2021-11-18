'use strict'

const procurarImagens = async (pesquisa) => {
    const key = '24047063-dc943843612bc9fccbc6693d8'
    const url = `https://pixabay.com/api/?key=${key}&q=${pesquisa}`
    const response = await fetch(url)
    return response.json()
}

const carregarGaleria = async (pesquisa) => {
    const {hits} = await procurarImagens(pesquisa)
}

const handleKeypress = ({key, target}) => {
    if(key === 'Enter'){
        carregarGaleria(target.value)
    }
}

document.querySelector('#pesquisa-input').addEventListener('keypress', handleKeypress)