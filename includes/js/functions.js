$(function() {
    // Ajax sur l'affichage des différentes catégories avec un fondu
    $('#categorie').change(function(){
        let temp = $('#categorie option:selected').val();
        let box = $('#afficheCategorie');
        box.hide().load('includes/code/' + temp + '.html', function() {
            box.fadeIn('750');
            return false;
        });
    });

    // Lightbox de la galerie
    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });
    
});