// 3. Crear una función map que acepte un array y un callback y que:
//  • por cada elemento del array ejecute el callback pasándole dicho elemento como
//    argumento
//  • obtenga el resultado
//  • lo pushee a un nuevo array
//  • devuelva el array final con el resultado de cada una de las llamadas al callback.


const numeros = [4, 5, 6, 7, 8, 9]

const resultado = numeros.map((elemento, index) => {
  console.log(`valor del indice ${index} es ${elemento}`)
  return elemento * 2;
})

console.table(resultado);