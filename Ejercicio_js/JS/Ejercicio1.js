// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.


// let desde = Number(prompt("Ingrese el numero a iniciar"));
// let hasta = Number(prompt("Ingrese el numero en el que termina"))

let desde = Number(prompt("Ingrese el numero a iniciar"));
let hasta = Number(prompt("Ingrese el numero a finalizar"));


let timerId1 = setTimeout(function imprimirNumeros() {
  console.log(desde);
  desde++;
  if (desde <= hasta) {
    timerId = setTimeout(imprimirNumeros, 1000); // (*)
  }
  else {
    console.log("Fin del conteo")
  }
}, 2000);



// setInterval

// let timerId = setInterval(function imprimirNumeros() {
//   console.log(desde++)
//   if (desde > hasta) {
//     clearInterval(timerId)
//   }
// }, 1000)