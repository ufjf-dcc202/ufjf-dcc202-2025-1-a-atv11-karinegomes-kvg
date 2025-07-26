import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');
const btnRemover = document.querySelector('#remover');

btnLimpar.addEventListener('click',limparItensDeLista);
btnAdicionar.addEventListener('click', adicionarItemNaLista);
btnRemover.addEventListener('click', removerItemNaLista);

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i<lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

function removerItemNaLista() {
    const entrada = pEntrada.textContent;
    const numero = parseInt(entrada);
    if (!isNaN(numero)) {
        removeDaLista(numero-1);
        atualizarLista();
    }
    else {
        // Tratar caso de entrada inválida
        console.log("Não é um número");
    }
}

function adicionarItemNaLista() {
    adicionaNaLista(pEntrada.textContent);
    atualizarLista();
}
