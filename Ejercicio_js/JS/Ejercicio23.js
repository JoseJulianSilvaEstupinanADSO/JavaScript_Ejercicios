// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo


// try {
//   const url = '../json/.json';
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const json = await response.json();
//   console.log(json);
// } catch (error) {
//   console.error('Error:', error);
// }

try {
  fetch("../json/ejercicio233.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`No se pudo conectar: ${response.status}`);
    }

    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
} catch (error) {
  console.error('Error:', error);
}

