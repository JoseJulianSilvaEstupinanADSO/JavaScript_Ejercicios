// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno

const lista = [1, 2, 3, 4, 5]; // lista de elementos a procesar

const procesarElemento = async (elemento) => {
  // simulamos una llamada asincrónica con un setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Elemento ${elemento} procesado`);
      resolve(elemento * 2); // devolvemos el doble del elemento
    }, 1000);
  });
};

const procesarLista = async (lista) => {
  for (const elemento of lista) {
    const resultado = await procesarElemento(elemento); // esperamos a que se resuelva la promesa
    console.log(`Resultado: ${resultado}`);
  }
};

procesarLista(lista);