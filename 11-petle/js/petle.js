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
    console.log("Tablica! Index = " + i + ", wartość = " + tablica[i]); // taki zapis [i] powoduje, że w konsoli wyniki pojawiają się jako lista w kolejnych kolumnach (czyli np. w jednej kolumnie "Audi" w kolejnej "Opel"), bez takiego zapisu pojawiałyby się one w jednej linii - po przecinku!!! 
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
var iter = 0;
while( iter < 20 ) {
    console.log( iter );
    ++iter;    
}

var iter = 20;
do {
    console.log(iter);
    ++iter;
}while(iter < 10);