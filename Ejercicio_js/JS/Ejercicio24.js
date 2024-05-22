// 24. Crear un objeto proxy usando la clase Proxy

const target = {};
const handler = {
  get: function(target, prop, receiver) {
    console.log(`Getting value of ${prop}`);
    return Reflect.get(...arguments);
  },
  set: function(target, prop, value, receiver) {
    console.log(`Setting value of ${prop} to ${value}`);
    return Reflect.set(...arguments);
  }
};

const proxy = new Proxy(target, handler);

proxy.name = 'John Doe';
console.log(proxy.name);