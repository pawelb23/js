 'use strict';

//for (wyrażenie początkowe ; wyrażenie warunkowe ; wyrażenie modyfikujące) {
   
////instrukcja do wykonania
//}


var ileRazy = 30;

for (var i = 0; i < ileRazy; i++) {
    var iteracja = i + 1; //służy do zmiany numeru iteracji (aby nie zaczynała się od "0" tylko od "1")
    console.log("Iteracja pętli nr " + iteracja);
}




var tablica = ["Audi", "Opel", "Honda", "Mazda", "Nissan"];

for (var i = 0; i < tablica.length; i++) {
    console.log("Tablica! Index = " + i + ", wartość = " + tablica); // taki zapis [i] powoduje, że w konsoli wyniki pojawiają się jako indeks i jeden samochód np. indeks 0 audi, indeks 1 opel, itd --- w innym przypadku wyniki pojawiałyby się jako lista indeksów i w każdej byłyby wszystkie samochody czyli indeksy od 0 do 4 i każdy miałby tablicę audi, opel, honda, mazda, nissan. 
}                                                           



tablica.forEach(function (elementTablicy, indexTablicy) {
    var iteracja = indexTablicy + 1;
    console.log("Samochód numer: " + iteracja + ", wartość: " + elementTablicy);
});




tablica.forEach(function (elementTablicy, indexTablicy) {
    var iteracja = indexTablicy + 1;
    if (elementTablicy == "Mazda")
        console.log("Samochód numer: " + iteracja + ", wartość: " + elementTablicy);
});


tablica.forEach(function (et, it) {
    if (et == "Mazda") {
        console.log("Index: " + it + ", wartość: " + et);
    }
});

for (var i = 0; i < tablica.length; i++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(i, tablica[i]);
}

//Pętla WHILE
var itern = 0;
while( itern < 25 ) {
    console.log( itern );
    ++itern;  

    //    {break};//break w tym miejscu spowoduje, że instrukcje z wnętrza pętli wykonają się tylko raz czyli w konsoli pokaże się indeks równy 0
   
    //if(itern++>=10){break};//break w tym miejscu spowoduje przerwanie sprawdzania funkcji po 10 razie
   
    //if(itern % 2 !=0){continue};//continue na razie w tym miejscu nie jest dla mnie zrozumiałe
}


var iter = 20;//funkcja do...while - w konsoli pojawi się wynik 20, spowodowane jest to tym iż ta funkcja sprawdza kod który ma być powtarzany (czyli nasze iter = 20) przed sprawdzeniem wyrażenia (czyli tutaj iter < 10). Wynika z tego, że zawsze ta funkcja przynajmniej raz wykona instrukcję z wnętrza pętli

do {
    console.log(iter);
    ++iter;
} while(iter < 10);