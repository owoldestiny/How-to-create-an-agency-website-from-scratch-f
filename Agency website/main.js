$(document).ready(function() {
    $('.menuIcon').click(function() {
        $('body').toggleClass('menuShown');
    });
});

$(document).ready(function() {
    $("menu a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                window.location.hash = hash;
            });
        }
    });
});

var section = $('#blog li, .faq li');

function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);