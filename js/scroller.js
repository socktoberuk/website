$("#stories-nav").click(function() {
    toggleNav();
    $('html, body').animate({
        scrollTop: $("#stories").offset().top
    }, 1500);
});

$("#about-nav").click(function() {
    toggleNav();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

$("#involve-nav").click(function() {
    toggleNav();
    $('html, body').animate({
        scrollTop: $("#involve").offset().top
    }, 1500);
});