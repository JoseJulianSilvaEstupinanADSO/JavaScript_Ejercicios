// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

function filtrar(array, callback) {
    return array.filter(element => callback(element));
}

const numeros = [2,5,9,3,7,6,7]


const operacion = num => num % 3 === 0;

const evento = filtrar(numeros, operacion);

console.log(evento)

