'use strict';

//funkcja bez paraametrów

var zmienna1 = "Adam"; //zmienna globalna widoczna wszędzie

function zmiennaLoklna() {
    
    var zmienna1 = "Zmienna lokalna Adam"; //zmienna loklna widoczna tylkko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna tylko w funckji";
    console.log(zmienna1);
}

zmiennaLoklna();
console.log(zmienna1);


function obliczWarunek() {
    var wynik = 10 * 15 * 20;
    return wynik;
}

var rezultatRezultat = obliczWarunek();
console.log(rezultatRezultat);



function obliczWynik( parametr1, parametr2, parametr3 ) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}

var rezultatObliczen = obliczWynik( 20, 10, 3 );
console.log(rezultatObliczen);

var rezultatObliczen = obliczWynik( 1, 4, 3 );
console.log(rezultatObliczen);

var rezultatObliczen = obliczWynik( 100, 4, 1 );
console.log(rezultatObliczen);

//==============================================================

var liczba1 = 7;
var liczba2 = 5;

function odejmowanie(liczba1, liczba2) {
  var odejmowanie = liczba1 - liczba2;
  
  return odejmowanie;
}


var wynik1 = odejmowanie(2, 5);

// liczba2 wew funkcji stanie się parametrem, który nazywa się liczba1 wew. finkcji - czyli masło maślane - NIE NAZYWAMY ZMIENNYCH TAK JAK PARAMETRÓW FUNKCJI!!! bo jest to bardzo błędogenna praktyka

var wynik2 = odejmowanie(liczba2, liczba1);


console.log( wynik1 );
console.log( wynik2 );

