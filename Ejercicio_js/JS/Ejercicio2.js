// 2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.


let i = 0;

setTimeout(() => console.log(i), 1000);

for (let j = 0; j < 1000000000; j++){
  i++;
}


// Despues del bucle por que el setTimeout tiene un tiempo de espera de un segundo 