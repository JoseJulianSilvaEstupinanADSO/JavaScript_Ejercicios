// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

let suma = 0;

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(5), 1000);


}).then(function(result) {

  alert(result); // 5
  suma += result

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2
  suma += result

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4
  suma += result

  alert("la suma es: "+ suma)

});


// con funcion flecha

// new Promise((resolve, reject) => {

//   setTimeout(() => resolve(5), 1000);


// }).then((result) => {

//   alert(result); // 5
//   suma += result

//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then((result) => { // (**)

//   alert(result); // 2
//   suma += result

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then((result) => {

//   alert(result); // 4
//   suma += result

//   alert("la suma es: "+ suma)

// });