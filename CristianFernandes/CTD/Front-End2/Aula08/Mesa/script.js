
const prevent = document.getElementById('enviar');
const colorEl = document.getElementById('hover');
const log = document.getElementById('log');

prevent.addEventListener('click', function(event){
    event.preventDefault();
});

const alertLoaded = (value) => {
    alert('Página carregada')
};

const colorOver = hover.onmouseover = function(){
    this.style.color = "red";
};

const colorOut = hover.onmouseout = function(){
    this.style.color = "black";
};

var count = 0;
onkeydown = function(){
    count++;
    log.innerHTML = 'Foram ' + count + 'x teclas apertadas em seu teclado!';
}