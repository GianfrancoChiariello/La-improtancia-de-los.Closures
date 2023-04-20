function createAdder(num) {
  return function(value) {
    return num + value;
  };
}

const addFive = createAdder(5);
console.log(addFive(3)); // Devuelve 8
