// chiedere di inserire il numero
var num = parseInt(prompt("Inserire il numero"));

// stampasre il numero se è pari se no stampare il successivo

if ( num % 2 == 0 ) {
  document.getElementById('number').innerHTML = ( num );
} else if ( num % 2 == 1 ) {
  document.getElementById('number').innerHTML = ( num + 1 );
}
