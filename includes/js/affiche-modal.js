// Méthodes JQuery pour afficher les modals au clic sur les différents boutons

$(function () {

    $('#qui').on('click', function () {
        $('#modalQui').fadeIn('slow');
    })

    $('#fermerModalQui').on('click', function () {
        $('#modalQui').fadeOut('slow');
    })

    $('#mentions').on('click', function () {
        $('#modalMentions').fadeIn('slow');
    })

    $('#fermerModalMentions').on('click', function () {
        $('#modalMentions').fadeOut('slow');
    })

});