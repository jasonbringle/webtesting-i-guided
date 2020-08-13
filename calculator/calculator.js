module.exports = {
  add,
  staticString
};

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);
  return values.reduce((acc, el) => { return acc + el}, 0);
}

function staticString() {
  return "this is a static string"
}