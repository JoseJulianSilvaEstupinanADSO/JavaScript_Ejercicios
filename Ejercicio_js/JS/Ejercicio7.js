// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function primero(elemento) {
    if (elemento >= 9) {
        return true
    }
}

const numeros = [5,6,9,1,5,2].find(primero);

console.log(numeros)
