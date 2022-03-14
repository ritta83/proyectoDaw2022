function modoNoche(){
    $('.icon-brightness-contrast').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('modo-noche');
    });
}
modoNoche();