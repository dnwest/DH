function podeSubir(altura, acompanhado){

    if(altura > 1.40 && altura <= 2){
        console.log("Acesso autorizado");
    }else if ((altura >= 1.20 && altura < 1.40 && acompanhado == true)) {
        console.log("Acesso autorizado somente com acompanhante");
    } else {
        console.log("acesso Negado");
    }
}
podeSubir(1.70, false);
podeSubir(1.39, false);
podeSubir(1.39, true);
podeSubir(1.20, false);