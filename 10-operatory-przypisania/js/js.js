//operatory przypisania

var liczba1 = 14;
var liczba2 = 6;

//liczba += 2; // liczba1 = liczba1 + 2;

console.log(liczba1 * liczba2);

liczba1 -= 10; //od pierwszej liczby odejmujemy 10 czyli (14 - 10)

liczba1 %= 6; // liczba1 = liczba1 % 6;



console.log(liczba1);


var wynik = (liczba1 >= liczba2) ? "liczba1 większa od liczba2" : "liczba1 mniejsza od liczba2";

console.log(wynik);


var wynikj = (liczba1 === liczba2) ? "prawda" : "fałsz";

console.log(wynik);

var wynik = (liczba1 !== liczba2) ? "prawda" : "fałsz";

console.log(wynik);

var liczba1 = 13;
var liczba2 = 6;
var pietro = 14;

if (liczba1 > liczba2 && pietro == 14) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
}


if (liczba1 > liczba2 || pietro == 14) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
}

var liczba1 = 13;
var liczba2 = 60;
var pietro = 10;

if (liczba1 > liczba2 || pietro == 14) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
}

if (!(liczba1 < liczba2) || pietro == 14) {
    console.log("Spełnione zostały dwa warunki, także TRUE");
} // wykrzyknik przed liczba1 jeden zmienia "CAŁE WYRAŻENIE"


var liczba1 = 12;
var liczba2 = 10;
var prawda = "smog";
var pietro = 10;


if (liczba1 == liczba2) {
    console.log("Liczby są równe");
} else if (liczba1 < liczba2) {
    console.log("Liczba1 większa od liczby2");
} else if (liczba1 == "smog") {
    console.log("liczba1 równa się smog");
} else {
    console.log("kod który wykona się żaden z warunków nie zostanie spełniony")
}

//SWITCH!!!

var grupa = 18;

switch (grupa) {
    case 10:
        console.log("Liczba osób w grupie = 10");
        break;
    case 12:
        console.log("Liczba osób w grupie = 12");
        break;
    case 16:
        console.log("liczba osób w grupie = 14");
        break;
    case 18: // - liczba var grupa odpowiada temu case
        console.log("Liczba osób w grupie = 20");
        break;
    default: // jeżeli nie będzie się równało żadnemu case
        console.log("Nie wiadomo ile osób w grupie");
}