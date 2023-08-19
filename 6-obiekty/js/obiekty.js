"use strict";

// tak tworzymy obiekty kiedy jest jeden obiekt
var osoba = {
    imie: "Adam",
    imieDwa: "Jan",
    nazwisko: "Nowacki",
    wzrost: 182,

    wyswietlSzczegoly: function() {
        console.log(
            "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost + " cm"
        );
    },
    wyswietlSzczegolyDwa() {
        //tak też możemy zapisać funkcję w obiekcie (to samo co powyżej, tylko inny zapis)
        console.log(
            "Osoba to: " +
            this.imieDwa +
            " " +
            this.nazwisko +
            " " +
            this.wzrost +
            " cm"
        );
    },
};

console.log(osoba.imie);
console.log(osoba["nazwisko"]);
osoba.wyswietlSzczegoly();
osoba.wyswietlSzczegolyDwa();

// kolejny przykład
var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,

    wyswietlSzczegoly: function(paramImie, paramWzrost) {
        this.imie = paramImie;
        this.wzrost = paramWzrost;

        console.log(
            "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost + " cm"
        );
    },
};

console.log(osoba.imie);

osoba.wyswietlSzczegoly("Ela", 165);

//dodawanie właściwości
osoba.wiek = 36;
console.log(osoba.wiek);

osoba.wyswietlWiek = function() {
    console.log(this.wiek);
};

osoba.wyswietlWiek();