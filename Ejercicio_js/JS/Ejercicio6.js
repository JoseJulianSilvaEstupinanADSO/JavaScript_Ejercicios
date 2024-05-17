// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true


function some(elemento) {
    return elemento >= 0;
}

const numeros = [2,23,-45,5,6].some(some);

console.log(numeros);