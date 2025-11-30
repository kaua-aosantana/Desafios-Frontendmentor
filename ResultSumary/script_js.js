const nome = [
    '#reaction',
    '#memory',
    '#verbal',
    '#visual'
]
const cores_fundo = [
    'hsla(0, 100%, 67%, 0.1)',
    'hsla(39, 100%, 56%, 0.1)',
    'hsla(166, 100%, 37%, 0.1)',
    'hsla(234, 85%, 45%, 0.1)'
]

const cores_texto = [
    'hsl(0, 100%, 67%)',
    'hsl(39, 100%, 56%)',
    'hsl(166, 100%, 37%)',
    'hsl(234, 85%, 45%)'
]

for (let i = 0; i < 4; i++){
    document.querySelector(nome[i]).style.backgroundColor = cores_fundo[i]
    document.querySelector(nome[i]).style.color = cores_texto[i]
}
