let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;


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
    habilitarPedir ()
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
    habilitarPedir ()
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
    habilitarPedir ()
}


function habilitarPedir (){
if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
    const BotaoPedir = document.querySelector('.bot .pedir')
    BotaoPedir.classList.add('habilitado')
    BotaoPedir.innerText = 'Fechar pedido'
    BotaoPedir.removeAttribute('disabled')
}
}


function conferir(){
    
}




let total = '26,54'.replace(',', '.')
