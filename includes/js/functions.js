$(document).ready(function () {

    // Ajax sur l'affichage des différentes catégories avec un fondu et un spinner d'attente de chargement
    $('#categorie').change(function () {
        $('#afficheCategorie').html('<div class="row justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">chargement...</span></div></div>');
        let temp = $('#categorie option:selected').val(); // On récupère la valeur de l'option du select
        let box = $('#afficheCategorie'); // Variable pour initialiser le fondu
        setTimeout(function () {
            // Recharge la page par défaut (en AJAX) en cas de clic sur 'Séléctionnez une catégorie'
            if (temp == 'page-tarifs' || temp == 'page-galerie') {

                box.hide().load('includes/code/' + temp + '.html', function () {
                    box.fadeIn('750');
                    return false;
                });

            } else {

                box.hide().load('includes/code/' + temp + '.html', function () {
                    box.fadeIn('750');
                    return false;
                });
            }
        }, 500);
    });

    
    // Lightbox de la galerie
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });

    
});


