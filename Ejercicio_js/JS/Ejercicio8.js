// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined


function mayor(elemento) {
    if (elemento > 0) {    
        return elemento
    }
}

const numeros = [2,4,9,3,8,56,48,75].findIndex(mayor)

console.log(numeros)
