'use strict'

const procurarImagens = async (pesquisa) => {
    const key = '24047063-dc943843612bc9fccbc6693d8'
    const url = `https://pixabay.com/api/?key=${key}&q=${pesquisa}`
    const response = await fetch(url)
    return response.json()
}

const criarCard = ({webformatURL, pageURL}) => {
    const card = document.createElement('div')
    card.classList.add('card-container')
    card.innerHTML = `
        <a href="${pageURL}">
            <img src="${webformatURL}" class="card-imagem">
        </a>
    `
    return card
}

const carregarGaleria = async (pesquisa) => {
    const container = document.querySelector('.galeria-container')
    const {hits} = await procurarImagens(pesquisa)
    const cards = hits.map(criarCard)
    container.replaceChildren(...cards)
}

const handleKeypress = ({key, target}) => {
    if(key === 'Enter'){
        carregarGaleria(target.value)
    }
}

document.querySelector('#pesquisa-input').addEventListener('keypress', handleKeypress)