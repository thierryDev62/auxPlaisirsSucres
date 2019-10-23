$(function() {
    // Ajax sur l'affichage des différentes catégories
    $('#categorie').change(function() {
        var temp = $('#categorie option:selected').val();
        $('#afficheCategorie').html('<div class="spinner-border" role="status"></div>');
        $('#afficheCategorie').load('includes/code/' + temp + '.html');
    });

    // Lightbox de la galerie
    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});