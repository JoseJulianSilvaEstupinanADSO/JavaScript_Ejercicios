// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

fetch('../json/ejercicio18.json')
  .then(response => response.json())
  .then(data => {
    const filteredMembers = data.members.filter(member => member.age === "Molecule Man");
    console.log(filteredMembers);
  });


  // fetch('data.json')
  // .then(response => response.json())
  // .then(data => {
  //   const filteredMembers = data.members.filter(member => member.name.startsWith('A'));
  //   console.log(filteredMembers);
  // });