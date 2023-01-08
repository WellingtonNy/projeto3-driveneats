let prato;
let bebida;
let sobremesa;


function selecionarPrato(thisPrato) {
    const seletor=document.querySelector('.prato .selecionado')
    const check  =document.querySelector('.prato .mostrar')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        check.classList.remove('mostrar')

    }
 thisPrato.classList.add('selecionado')
 document.querySelector('.prato .selecionado img').classList.add('mostrar')
}


function selecionarBebida(thisBebida) {
    const seletor=document.querySelector('.bebida .selecionado')
    const check  =document.querySelector('.bebida .mostrar')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        check.classList.remove('mostrar')

    }
 thisBebida.classList.add('selecionado')
 document.querySelector('.bebida .selecionado img').classList.add('mostrar')
}


function selecionarSobremesa(thisSobremesa) {
    const seletor=document.querySelector('.sobremesa .selecionado')
    const check  =document.querySelector('.sobremesa .mostrar')
    if (seletor !== null) {
        seletor.classList.remove('selecionado')
        check.classList.remove('mostrar')
    }
 thisSobremesa.classList.add('selecionado')
 document.querySelector('.sobremesa .selecionado img').classList.add('mostrar')
}

