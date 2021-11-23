let carro = {
    modelo : "Ford",
    cor : "Branca",
    andar : function(){
        return "carro "+this.modelo+" andando na cor "+this.cor;
    }
}

console.log(carro.andar());


function Carro(modelo, cor){
    this.modelo = modelo;
    this.cor = cor;
}

let carro1 = new Carro('Ford', 'Vermelho');
console.log(carro1);