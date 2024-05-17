// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


function recorrido(elemento) {
    return elemento >= 0;
}

const numeros = [12,50,6,4,8,6,10].every(recorrido)

console.log(numeros);


// con funcion flecha

const numeros2 = [12,50,6,4,8,6,10]

const test = (elemento) => elemento >= 0;

console.log(numeros2.every(test));