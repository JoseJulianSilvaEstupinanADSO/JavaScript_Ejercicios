// 9. Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

const _ = require("underscore-contrib");

const numeros = [2,6,8,6,8,4,6]

let nums = _.dropWhile(numeros,(e) => {
    return e != 5;
})

console.log(numeros);
console.log(nums);
