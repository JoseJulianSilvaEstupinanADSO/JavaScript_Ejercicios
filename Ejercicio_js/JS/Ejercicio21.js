// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
    console.log(1)
  }, 2000); 
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error en promesa 2");
    console.log(2)
  }, 4000); 
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta");
    console.log(3)
  }, 6000); 
});

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
  console.log("Estado de todas las promesas:");
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`Promesa ${result.value} se ha resuelto`);
    } else {
      console.log(`Promesa rechazada: ${result.reason}`);
    }
  });
});