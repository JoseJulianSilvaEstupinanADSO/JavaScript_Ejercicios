// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

const _ = require("lodash");

let usuarios = [
    { 'user': 'julian', 'active': false },
    { 'user': 'churro', 'active': false },
    { 'user': 'calverto', 'active': true }
];
 
 
let filtro = _.takeWhile(usuarios, function (o) { return !o.active; });
 
console.log(filtro);