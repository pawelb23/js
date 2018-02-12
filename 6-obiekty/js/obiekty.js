// tak tworzymy obiekty kiedy jest jeden obiekt
var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function() {
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost + " cm" );
    }
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);
osoba.wyswietlSzczegoly();

// kolejny przykład
var osoba = {
    imie: "Adam",
    nazwisko: "Nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function(paramImie) {
        this.imie = paramImie;
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost + " cm" );
    }
}

console.log(osoba.imie);

osoba.wyswietlSzczegoly("Ela");

//dodawanie właściwości
osoba.wiek = 36;
console.log(osoba.wiek);

osoba.wyswietlWiek = function() {
    console.log(this.wiek);
}

osoba.wyswietlWiek();