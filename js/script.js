'use strict';


$(document).ready(function(){
    
    var slider = $('#slider');
    var slideShow = $('#slider .slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
// Ustawienie szerokosci kontenera
    
    slideShow.css('width', slideCount * 100 + '%');
    
// Ustawienie marginesow i szerokosci dla pojedynczych slidow
    
     slideShow.find('.single-slide').each(function(index) {
         var leftPercent = (slideWidth * index) + '%';
         $(this).css('margin-left', leftPercent);
         $(this).css('width', slideWidth + '%');
    });
    
    
// Wywołanie funkcji slide na click
    
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex - 1);
    });
    
    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex + 1);
    });
    
    
// Definicja funkcji slide 
    
    function slide(newSlideIndex) {
// Sprawdzamy czy pierwszy czy ostatni  nie robimy nic
        if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
// Element slide caption i przypisz do zmiennej 
        var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);
        
        
// Ukrywanie napisu
        slideCaption.hide();
        
// Zmienna trzymajaca margines lewy do przesuwania kontenera 
        
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        
// Animacja na slideShow
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
            // Przypisz do slideIndex nowy index slidu
            slideIndex = newSlideIndex;
            
// Pokaz napis fadeIn()
            slideCaption.fadeIn('slow');
        })
    } 
})