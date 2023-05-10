const container = document.getElementById('container')
console.log(container)

const button1 = document.querySelector('#button1')
console.log(button1.textContent);

const botoes = document.getElementsByClassName('btn')
console.log(botoes)

function mostraAlerta() {
    alert('Você clicou no botão!')
}

const listaDeCompras = []

function adicionarALista(item) {
    listaDeCompras.push(item)
    adicionaElemento(item)
    compra.value = ''
    compra.focus()
}

function removeDaLista() {
    listaDeCompras.pop()
}

const compra = document.getElementById('compra')
const adicionarCompra = document.getElementById('adicionarCompra')

adicionarCompra.addEventListener('click', function() {
    // console.log(compra.value)
    adicionarALista(compra.value)
})

function exibirLista() {
    alert(listaDeCompras)
}

const visualizacaoDeCompras = document.createElement('div')
visualizacaoDeCompras.className = 'lista'
visualizacaoDeCompras.id = 'listaCompras'
visualizacaoDeCompras.textContent = 'teste'

container.appendChild(visualizacaoDeCompras)

function adicionaElemento(compra) {
    const item = document.createElement('p')
    item.className = "item-da-lista"
    item.textContent = compra
    visualizacaoDeCompras.appendChild(item)    
}