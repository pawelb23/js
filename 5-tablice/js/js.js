//tablice

var imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

console.log(imiona[2]); // liczymy od "0"

console.log(imiona);

imiona[5] = "Monika";
imiona[6] = "Marcin";

console.log(imiona);

//push dodaje element na końcu tablicy i z automatu przypisze kolejny indeks
imiona.push("Mikołaj", "Adam" );
console.log(imiona);

//usuwanie elementu ostatniego
imiona.pop();
console.log(imiona);

//usunięty element
var usunietyElement = imiona.pop();

console.log(usunietyElement);

// wstawianie elementu na początku tablicy
imiona.unshift("Kasia", "Michał");

console.log(imiona);

//usuwanie elementu z początku tablicy
imiona.shift();

console.log(imiona);

//sprawdzanie ilości elementów w tablicy
console.log(imiona.length);

//rozbijanie tablicy na ciąg tekstowy
var tablicaJakoTekst = imiona.join();
console.log(tablicaJakoTekst);


var tablicaJakoTekst = imiona.join("---");// można wstawić w nawiasie co się chce - np. (", ")
console.log(tablicaJakoTekst);

//odwracanie tablicy
var imionaReverse = imiona.reverse();
console.log(imionaReverse);

//sortowanie tablicy
var posortowana = imiona.sort(); //metodą ze zmienną
console.log(posortowana);

