function trocar() {
    var value = prompt("Escolha a imagem que deseja mudar! Sendo: 0 - Tigre, 1 - Leão, 2 - Guepardo, 3 - Pantera Negra, 4 - Jaguar, 5 - Guepardo")
    let insertSRC = prompt("insira a URL da imagem")
    let listaFelinos = document.querySelectorAll(".item");
    let src = listaFelinos[value];
    let img = src.querySelector('img')
    img.setAttribute("src", `${insertSRC}`)
} 