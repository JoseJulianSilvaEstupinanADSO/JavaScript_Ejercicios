// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola

let julian = () => {
  setTimeout(() => {
    fetch("../json/ejercicio17.json")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch(() => {
        console.log("Error")
      })
}, 3000);
}

julian()