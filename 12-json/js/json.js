'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Adam",           //w przykładzie z Akademi 108 mam, iż imię także powinno 
            nazwisko: "Nowacki",        //być w cudzysłowiu --- sprawdzić
            wzrost: 180,
            zainteresowania: [
                {
                    nazwa: "podróże (te małe i te duże)XD"
                },
                {
                    nazwa: "sport"
                },
           ]
       },

        {
            imie: "Marcin",
            nazwisko: "Konopka",
            wzrost: 185,
            zainteresowania: [
                {
                    nazwa: "szachy"
                },
                {
                    nazwa: "motoryzacja"
                },
            ]
        }
    ]
}

console.log(jsonOsoby);


jsonOsoby.osoby.forEach(function (element, index) {

//    console.log(element.imie, index); //Pokaże też imiona oraz ich indeksy
    console.log(element.imie);
    console.log(element.nazwisko);
    console.log(element.wzrost);
    console.log(element.zainteresowania);
    //Np wpisując  console.log(element.zainteresowania[1]); - dotrzemy do zainteresowani nazwa: "sport" - bo indeks leci od zera (trzeba pamiętać)

    element.zainteresowania.forEach(function (z, ind) {
        console.log(z);
        //    console.log(element);//pokaże wszystkie elementy w konsoli
    })
});

console.log(jsonOsoby.osoby[1].zainteresowania[1].nazwa);  //Mój sposób na dotarcie do konkretnej wartości tutaj.