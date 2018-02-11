//funkcja bez paraametrów

var zmienna1 = "Adam"; //zmienna globalna widoczna wszędzie

function zmiennaLoklna() {
    var zmienna1 = "Zmienna loklna Adam"; //zmienna loklna widoczna tylkko w funkcji
    var zmienna2 = "Zmienna lokalna 2 widoczna tylko w funckji"
    //console.log(zmienna1);
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