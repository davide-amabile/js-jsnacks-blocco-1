// chiedere i 2 numeri all'utente

var num1 = parseInt(prompt("Inserire il primo numero"));
var num2 = parseInt(prompt("Inserire il secondo numero"));


if ( isNaN(num1) || isNaN(num2) ) {
  document.getElementById('number').innerHTML = ("Inserire numero");
}
else if ( num1 > num2 ) {
  document.getElementById('number').innerHTML = ("Il numero maggiore è" + " " + num1);
} else if (num2 > num1) {
  document.getElementById('number').innerHTML = ("Il numero maggiore è" + " " + num2);
} else if  ( num1 === num2) {
  document.getElementById('number').innerHTML = ("I numeri sono uguali");
}
