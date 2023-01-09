let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let precoTotal;
let nome;
let endereco;


function selecionarPrato(thisPrato) {
    const seletor = document.querySelector('.prato .selecionado')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        document.querySelector('.prato .mostrar').classList.remove('mostrar')
    }
    thisPrato.classList.add('selecionado')
    document.querySelector('.prato .selecionado img').classList.add('mostrar')
    prato = document.querySelector('.prato .selecionado h3').innerText
    precoPrato = document.querySelector('.prato .selecionado .preco').innerText;
    habilitarPedir()
}


function selecionarBebida(thisBebida) {
    const seletor = document.querySelector('.bebida .selecionado')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        document.querySelector('.bebida .mostrar').classList.remove('mostrar')
    }
    thisBebida.classList.add('selecionado')
    document.querySelector('.bebida .selecionado img').classList.add('mostrar')
    bebida = document.querySelector('.bebida .selecionado h3').innerText
    precoBebida = document.querySelector('.bebida .selecionado .preco').innerText;
    habilitarPedir()
}


function selecionarSobremesa(thisSobremesa) {
    const seletor = document.querySelector('.sobremesa .selecionado')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        document.querySelector('.sobremesa .mostrar').classList.remove('mostrar')
    }
    thisSobremesa.classList.add('selecionado')
    document.querySelector('.sobremesa .selecionado img').classList.add('mostrar')
    sobremesa = document.querySelector('.sobremesa .selecionado h3').innerText
    precoSobremesa = document.querySelector('.sobremesa .selecionado .preco').innerText;
    habilitarPedir()
}


function habilitarPedir() {
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        const BotaoPedir = document.querySelector('.bot .pedir')
        BotaoPedir.classList.add('habilitado')
        BotaoPedir.innerText = 'Fechar pedido'
        BotaoPedir.removeAttribute('disabled')
    }
}


function conferir() {
    document.querySelector('.modal').classList.remove('escondido')
    document.querySelector('.modal .info .infoPrato p').innerText = `${prato}`
    document.querySelector('.modal .info .infoPrato span').innerText = `${precoPrato}`
    document.querySelector('.modal .info .infoBebida p').innerText = `${bebida}`
    document.querySelector('.modal .info .infoBebida span').innerText = `${precoBebida}`
    document.querySelector('.modal .info .infoSobremesa p').innerText = `${sobremesa}`
    document.querySelector('.modal .info .infoSobremesa span').innerText = `${precoSobremesa}`
    total()
    document.querySelector('.modal .info .total span').innerText = `${precoTotal}`
    nome = prompt('Digite seu Nome')
    endereco = prompt('Digite seu Endereço')
}


function total() {
    precoTotal = (Number(precoPrato.replace(',', '.')) + Number(precoBebida.replace(',', '.')) + Number(precoSobremesa.replace(',', '.'))).toFixed(2).replace('.', ',')
    console.log(precoTotal)
}


function cancelarPedido() {
    document.querySelector('.modal').classList.add('escondido')
}


function podePedir() {
let precoTotalWpp=precoTotal.replace(',','.')
    let whatsApp =
        `Olá, gostaria de fazer o pedido:\n
- Prato:${prato}\n
- Bebida:${bebida}\n
- Sobremesa:${sobremesa}\n
Total: R$ ${precoTotalWpp}\n
\n
Nome:${nome}\n
Endereço:${endereco}`


    const mensagem = `https://wa.me/5521991750289?text=${encodeURIComponent(whatsApp)}`
    window.open(mensagem)
}