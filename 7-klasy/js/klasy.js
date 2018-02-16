//pierwsze ogłoszenie

class Ogloszenie {
    constructor(tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    wyswietlOgloszenie() {
        console.log( "Ogłoszenie! Tytuł: " + this.tytul + " Opis: " + this.opis + " Kontakt: " + this.kontakt + " Cena: " + this. cena);
    }
}

var ogloszenie1 = new Ogloszenie ( "Sprzedam Opla", "Świeżynka prosto od 80letniego Niemca", "605-557-421", 16000 );

ogloszenie1.wyswietlOgloszenie();


// drugie ogłoszenie


var ogloszenie2 = new Ogloszenie( "Sprzedam Audi", "Świeżynka prosto od 80letniego Niemca", "605-557-421", 16000 );

ogloszenie2.wyswietlOgloszenie();

console.log( typeof ogloszenie1 ); // wyświetli informacje, że jest to obiekt
