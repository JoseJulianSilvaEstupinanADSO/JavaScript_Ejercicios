// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.
let numero = 7
function delay(ms,numero) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (numero === 7) {
        resolve("Promesa resuelta")
      }
      else {
        reject(new Error("error"))
      }
    },ms)
  })
}

delay(3000,numero).then(
  result => alert(result)
)