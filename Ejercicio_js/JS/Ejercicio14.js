// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function f(ms) {
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operacion completada")
    }, ms);
  })

  let result = await promise

  alert(result)
}


f(1000)