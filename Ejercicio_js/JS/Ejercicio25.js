// 25. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola




const handler = {
  set: function(target, prop, value, receiver) {
    if (prop === 'numero' && typeof value !== 'number') {
      console.error(`El valor de la propiedad "${prop}" debe ser numérico`);
      return false;
    } else if (prop === 'texto' && typeof value !== 'string') {
      console.error(`El valor de la propiedad "${prop}" debe ser alfanumérico`);
      return false;
    } else if (prop === 'email' && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
      console.error(`El valor de la propiedad "${prop}" debe ser un correo electrónico válido`);
      return false;
    } else if (prop === 'fecha' && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      console.error(`El valor de la propiedad "${prop}" debe ser una fecha válida (YYYY-MM-DD)`);
      return false;
    } else if (/^\s+|\s+$/.test(value)) {
      console.error(`El valor de la propiedad "${prop}" no debe contener espacios en blanco al inicio o al final`);
      return false;
    }

    return Reflect.set(...arguments);
  }
};

const obj = new Proxy({}, handler);

obj.numero = 123;
obj.texto = 'Hola mundo';
obj.email = 'test@example.com';
obj.fecha = '2023-02-14';
obj.numero2 = '123'; // Error: El valor de la propiedad "numero2" debe ser numérico
obj.texto2 = 123; // Error: El valor de la propiedad "texto2" debe ser alfanumérico
obj.email2 = 'test example.com'; // Error: El valor de la propiedad "email2" debe ser un correo electrónico válido
obj.fecha2 = '14-02-2023'; // Error: El valor de la propiedad "fecha2" debe ser una fecha válida (YYYY-MM-DD)
obj.texto3 = ' Hola mundo '; // Error: El valor de la propiedad "texto3" no debe contener espacios en blanco al inicio o al final


// function esNumero(valor) {
//     return !isNaN(valor);
// }

// function esAlfanumerico(valor) {
//     return /^[a-zA-Z]+$/.test(valor);
// }

// function esEmail(valor) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
// }

// function esFecha(valor) {
//     return !isNaN(Date.parse(valor));
// }

// function tieneEspacios(valor){
//     return valor.startsWith(' ') || valor.endsWith(' ');
// }

// let handler = {
//     set: function(target, prop, value) {
//         if (tieneEspacios(value)){
//             console.error(`Error: La propiedad '${prop}' no debe tener espacios en blanco al principio o al final.`)
//             return false
//         }
//         switch (target.tipos[prop]) {
//             case 'numero':
//                 if (!esNumero(value)) {
//                     console.error(`Error: La propiedad '${prop}' debe ser un número.`);
//                     return false;
//                 }
//                 break;
//             case 'alfanumerico':
//                 if (!esAlfanumerico(value)) {
//                     console.error(`Error: La propiedad '${prop}' debe ser alfanumérica.`);
//                     return false;
//                 }
//                 break;
//             case 'email':
//                 if (!esEmail(value)) {
//                     console.error(`Error: La propiedad '${prop}' debe ser un email válido.`);
//                     return false;
//                 }
//                 break;
//             case 'fecha':
//                 if (!esFecha(value)) {
//                     console.error(`Error: La propiedad '${prop}' debe ser una fecha válida.`);
//                     return false;
//                 }
//                 break;
//             default:
//                 console.error(`Error: Tipo de propiedad desconocido para '${prop}'.`);
//                 return false;
//         }

//         target[prop] = value;
//         return true;
//     }
// };

// let objetoOriginal = {
//     tipos: {
//         edad: 'numero',
//         nombre: 'alfanumerico',
//         correo: 'email',
//         fechaNacimiento: 'fecha'
//     },
//     edad: null,
//     nombre: null,
//     correo: null,
//     fechaNacimiento: null
// };


// let proxy = new Proxy(objetoOriginal, handler);


// proxy.edad = "25";
// proxy.nombre = "Juan";
// proxy.correo = "juan@correo.com";
// proxy.fechaNacimiento = "1990-05-15";

// console.log(proxy.edad);
// console.log(proxy.nombre);
// console.log(proxy.correo);
// console.log(proxy.fechaNacimiento);


// proxy.edad = "veinticinco";
// proxy.nombre = "1234";
// proxy.correo = "correo@incorrecto";
// proxy.fechaNacimiento = "fecha";
