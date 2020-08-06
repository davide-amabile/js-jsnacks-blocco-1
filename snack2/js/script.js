// inserire le 2 parole
var word1 = prompt("Inserire la prima parola");
var word2 = prompt("Inserire la seconda parola");

// stampare la parola più lunga

if ( word1.length > word2.length) {
  document.getElementById('parola').innerHTML = ("la parola più lunga è:" + " " + word1);
} else if ( word2.length > word1.length ) {
  document.getElementById('parola').innerHTML = ("la parola più lunga è:" + " " + word2);
} else if ( word1.length === word2.length ) {
  document.getElementById('parola').innerHTML = ("Le parole sono lunghe uguali");
}
