function acaoCarro (callback){
    return callback();
}

function andar(){
    return 'O carro está andando';
}

function parar(){
    return 'O carro parou';
}

console.log(acaoCarro(andar));