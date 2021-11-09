// 1)
console.log("-----Ex:1-----")
console.log(!true);

// 2)
console.log("-----Ex:2-----")
console.log(!false);

// 3)
console.log("-----Ex:3-----")
console.log(!!false);

// 4)
console.log("-----Ex:4-----")
console.log(!!true);

// 5)
console.log("-----Ex:5-----")
console.log(!1);

// 6)
console.log("-----Ex:6-----")
console.log(!!1);

// 7)
console.log("-----Ex:7-----")
console.log(!0);

// 8)
console.log("-----Ex:8-----")
console.log(!!0);

// 9)
console.log("-----Ex:9-----")
console.log(!!"" );

// 10)
console.log("-----Ex:10-----")
let x = 5 ;
let y = 9;
x < 10 && x!==5
x>9 || x===5
console.log(!(x===y));

console.log("---------Segunda Parte--------")

// 1)
console.log("-----Ex:1-----")
let x1=10
let y1 ="a"
console.log(y1==="b" || x1 >= 10);

// 2)
console.log("-----Ex:2-----")
let x2=3
let y2=8
console.log(!(x2 == "3" || x2 === y2) && !(y2 !== 8 && x2 <= y2));

// 3)
console.log("-----Ex:3-----")
let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito));

