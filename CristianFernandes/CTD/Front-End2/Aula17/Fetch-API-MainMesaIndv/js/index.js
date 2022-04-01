// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
function random() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            return data.results[0];
        })
        .then(data => {
            renderizarDadosUsuario(data)
        })
        .catch((err) => {
            console.log(err);
        });
}
const card = document.querySelector('.card');

function renderizarDadosUsuario(data) {
    console.log(data)
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    card.innerHTML =
        `
    <div class="container">
    <img src = "${data.picture.large}">
    <div class="body">
    <p>nome:</p>
    <p class="title">${data.name.title} ${data.name.first} ${data.name.last}</p>
    <p>E-mail:</p>
    <p class="mail">${data.email}</p></div>
    </div>
`
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

random();