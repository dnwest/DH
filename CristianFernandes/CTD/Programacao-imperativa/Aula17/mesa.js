
/* 1 - Crie uma função que receba um array composto por números 
e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz,
usando map() e reduce().
 */
let array = [11,2,8,58,74,858,9];

let calc = array.map(function(result){
    return result && array.reduce(function(acumulador, item){
        return result / acumulador + item;
    })
})

console.log(calc);