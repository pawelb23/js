 'use strict';

//console.log('czy działa');

//1 Ćwiczenie
window.addEventListener('scroll', function() {
   
    console.log('123');
    var y = window.pageYOffset; //odległość
    var headerHeight = document.getElementById('main-header').offsetHeight;
    
    console.log(y);
    console.log(headerHeight);
    
    if(y >= headerHeight) {
        document.getElementById('main-header').style.backgroundColor = 'yellow';
    }


//2 Ćwiczenie

   
    var y = window.pageYOffset; //odlgłość od góry strony
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    if(y >= navHeight) {
        document.getElementById('main-nav').classList.add('transparent');
    }
    else{
        document.getElementById('main-nav').classList.remove('transparent');
    }


//3 Ćwiczenie

   
    if(y >= headerHeight) {
        var bgPos = - ((y - headerHeight) / 5);
        
        document.getElementById('background').style.backgroundPosition = bgPos + 'px' + ' 0';
    }
});//wszystko jest wpisane w jednej funkcji tzn. ćwiczenie 1, 2 i 3
