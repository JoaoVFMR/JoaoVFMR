var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullbar = null; // {6}
var und; // {7}

console.log('num = ', num);
console.log('price = ', price);
console.log('myName = ', myName);
console.log('trueValue = ', trueValue);
console.log('nullbar = ', nullbar);
console.log('und', und);

var myVariable = 'global';
myOtherVariable = 'global'; // usar o var no início
function myFunction(){
    var myVariable = 'local';
    return myVariable
}

function myOtherFunction(){
    myOtherVariable = 'local'; // usar o var para criar uma varíavel local sem mudar a global
    return myOtherVariable;
}

console.log(myVariable); // {1}
console.log(myFunction()); // {2}
console.log(myOtherVariable); // {3}
console.log(myOtherFunction()) // {4}
console.log(myOtherVariable); // {5}
