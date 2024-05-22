// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let numero = 7;

async function f(ms,numero) {
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero === 5 ) {
        resolve("Operacion completada")
      }
      else {
        reject(new Error("Promise rechazada"))
      }
    }, ms);
  })

  let result = await promise

  alert(result)
}


f(2000, numero)