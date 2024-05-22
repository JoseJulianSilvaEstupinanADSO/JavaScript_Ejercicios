// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

fetch('../json/ejercicio19.json')
  .then(response => response.json())
  .then(data => {
    const filtrar = data.members.filter(member => member.edad > 20 );
    console.log(filtrar);
  });