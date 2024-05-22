// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
function julian(time) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
    console.log("julian", time)
  }, time); 
});
}
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promesa 1 resuelta");
//     console.log("1")
//   }, 2000); 
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promesa 2 resuelta");
//     console.log("2")
//   }, 4000); 
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promesa 3 resuelta");
//     console.log("3")
//   }, 6000); 
// });

Promise.all([julian(2000), julian(6000), julian(1000)])
  .then((results) => {
  console.log("Todas las promesas se han resuelto:");
  console.log(results); // muestra el arreglo de resultados
  console.log("Mensaje final: Todas las promesas se han resuelto con éxito!");
});