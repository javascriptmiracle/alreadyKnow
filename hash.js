// Function stubs
function processFoo() { }
function processBar() { }

// Mapping
var CONDITIONS = {
  "foo": processFoo,
  "bar": processBar
};

// Login in lieu of a switch
function doSomething(key) {
   CONDITIONS[key]();
}