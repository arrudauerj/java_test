
// Mostra uma caixa de aviso na página
alert("Bem-vindo à aula de JavaScript!");
console.log("oi Bia, te amo")
console.log("Faz o L ★13")

// Exemplo 1: ler um texto e mostrar uma saudação
const campoNome = document.querySelector("#nome");
const botaoSaudacao = document.querySelector("#botao-saudacao");
const saidaSaudacao = document.querySelector("#saida-saudacao");

botaoSaudacao.addEventListener("click", function () {
    // trim remove espaços no início e no final do texto
    const nome = campoNome.value.trim();

    if (nome === "") {
        saidaSaudacao.textContent = "Por favor, digite seu nome.";
    } else {
        saidaSaudacao.textContent = `Olá, ${nome}! Bem-vindo à aula.`;
    }
});

// Exemplo 2: ler um número e usar estruturas de decisão
const campoNota = document.querySelector("#nota");
const botaoNota = document.querySelector("#botao-nota");
const saidaNota = document.querySelector("#saida-nota");

botaoNota.addEventListener("click", function () {
    const nota = Number(campoNota.value);

    if (campoNota.value === "" || nota < 0 || nota > 10) {
        saidaNota.textContent = "Digite uma nota válida entre 0 e 10.";
    } else if (nota >= 7) {
        saidaNota.textContent = "Situação: aprovado.";
    } else if (nota >= 5) {
        saidaNota.textContent = "Situação: recuperação.";
    } else {
        saidaNota.textContent = "Situação: reprovado.";
    }
});

// Exemplo 3: percorrer um array e criar elementos HTML
const conteudos = ["Variáveis", "Condições", "Repetições", "Funções", "Eventos"];
const botaoListar = document.querySelector("#botao-listar");
const listaConteudos = document.querySelector("#lista-conteudos");

botaoListar.addEventListener("click", function () {
    // Limpa a lista para não repetir os itens a cada clique
    listaConteudos.innerHTML = "";

    for (const conteudo of conteudos) {
        // Cria um novo elemento li na memória
        const item = document.createElement("li");
        item.textContent = conteudo;

        // Insere o novo li dentro da lista ul
        listaConteudos.appendChild(item);
    }
});