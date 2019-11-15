'use strict';

//funkcja bez paraametrów

var zmienna1 = "Adam"; //zmienna globalna widoczna wszędzie

function zmiennaLokalna() {

    var zmienna1 = "Zmienna lokalna Adam"; //zmienna loklna widoczna tylkko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna tylko w funckji";
    console.log(zmienna1);
}

zmiennaLokalna();
console.log(zmienna1);


function obliczWarunek() {
    var wynik = 10 * 15 * 20;
    return wynik;
}
//poniżej dwa sposoby przekazania wyniku
var rezultatRezultat = obliczWarunek(); //pierwszy sposób 
console.log(rezultatRezultat); //pierwszy spsób

console.log(obliczWarunek()); //drugi sposób


function obliczWynik(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}

var rezultatObliczen = obliczWynik(20, 10, 3);
console.log(rezultatObliczen);

var rezultatObliczen = obliczWynik(1, 4, 3);
console.log(rezultatObliczen);

var rezultatObliczen = obliczWynik(100, 4, 1);
console.log(rezultatObliczen);

//==============================================================

var liczba1 = 7;
var liczba2 = 5;

function odejmowanieGlowne(liczba1, liczba2) {
    var odejmowanie = liczba1 - liczba2;

    return odejmowanie;
}

console.log(odejmowanieGlowne(liczba1, liczba2)); //wyniki ten odnosi się do funkcji i zmiennych globalnych powyrżej

var wynik1 = odejmowanieGlowne(2, 5);

// liczba2 wew funkcji stanie się parametrem, który nazywa się liczba1 wew. funkcji - czyli masło maślane - NIE NAZYWAMY ZMIENNYCH TAK JAK PARAMETRÓW FUNKCJI!!! bo jest to bardzo błędogenna praktyka

var wynik2 = odejmowanieGlowne(liczba2, liczba1);


console.log(wynik1);
console.log(wynik2);