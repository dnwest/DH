// Pega o conteúdo atual
const containner = document.getElementById('containner');
const prevent = document.getElementById('addCard');
const myForm = document.getElementById('myForm')
//Previne no reloud
prevent.addEventListener('click', function(e){
    e.preventDefault();


const divCard = document.createElement("div");
divCard.classList.add("card");
const img = document.createElement("img");
img.classList.add("img-fluid");
const title = document.createElement("h1");
title.classList.add("card-title")
const description = document.createElement("p");
description.classList.add("card-description");

img.src = e.target.url.value;
title.innerHTML = e.target.title.value;
description.innerHTML = e.target.description.value;

});

// Adiciona o card
function addCards() {
     cardTemporario = containner.innerHTML,
        // Novo card que será inserido
        cardNovo = `${divCard}Teste de inserção, criar elementos do card aqui </br>`;

    // Concatena os card colocando o novo antes do card existente.
    cardTemporario = cardNovo + cardTemporario;

    // Coloca o novo card pelo DOM
    containner.innerHTML = cardTemporario;

    
};
