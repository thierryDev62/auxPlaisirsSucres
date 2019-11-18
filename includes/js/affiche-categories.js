$(document).ready(function () {

    // Ajax pour effectuer l'affichage des différentes catégories avec un fondu et un spinner d'attente de chargement

    $('#categorie').change(function () {

        // Affichage du spinner bootstrap
        $('#afficheCategorie').html('<div class="row justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">chargement...</span></div></div>');

        let valeurOption = $('#categorie option:selected').val(); // On récupère la valeur de l'option du select dans la variable valeurOption
        let containerPourFondu = $('#afficheCategorie'); // Variable pour initialiser le fondu

        // Un peu de valeurOptions pour que l'affichage ne soit pas brut
        setTimeout(function () {
            // Recharge la page par défaut en cas de clic sur 'Séléctionnez une catégorie'
            if (valeurOption == 'page-tarifs' || valeurOption == 'page-galerie') {

                if (valeurOption == 'page-tarifs') {
                    let url = "tarifs.html";
                    $(location).attr('href', url);
                } else {
                    let url = "galerie.html";
                    $(location).attr('href', url);
                }

            } else {

                // Test si on choisi une catégorie dans la galerie
                if (valeurOption == 'cupcakes' || valeurOption == 'entremet' || valeurOption =='gateau-pate-a-sucre' || valeurOption == 'layer-cake' || valeurOption == 'macarons' || valeurOption =='number-letter-cake') {
                    
                    // Chargement de la page HTML avec un fondu en fonction de l'option sélectionnée dans la galerie photo
                    containerPourFondu.hide().load('includes/code/trame-photos.html', function () {
                        containerPourFondu.fadeIn('750');

                        // Fonction d'affichage de la galerie photos
                        /******************************************************************************/
                        $(function () {
                            let urlImage = "";
                            switch (valeurOption) {

                                case 'cupcakes':
                                    urlImage = "galerie-photos/cupcakes/cup-cake-";
                                    break;
                                case 'entremet':
                                    urlImage = "galerie-photos/entremet/entremet-";
                                    break;
                                case 'gateau-pate-a-sucre':
                                    urlImage = "galerie-photos/gateau-pate-a-sucre/gateau-pate-a-sucre-";
                                    break;
                                case 'layer-cake':
                                    urlImage = "galerie-photos/layer-cake/layer-cake-";
                                    break;
                                case 'macarons':
                                    urlImage = "galerie-photos/macarons/macaron-";
                                    break;
                                case 'number-letter-cake':
                                    urlImage = "galerie-photos/number-letter/number-letter-";
                                    break;
                            }
                            // Boucle pour l'affichage de 9 images
                            for (let numeroImage = 1; numeroImage <= 9; numeroImage++) {
                                $('#afficheGaleriePhotos').append('<a href="' + urlImage + numeroImage + '.jpg" data-toggle="lightcontainerPourFondu" data-gallery="gallery" class="col-md-3"><img src="' + urlImage + numeroImage + '-thumb.jpg" alt="Photo ' + urlImage + ' de cupcakes" class="img-thumbnail shadow w-25 mb-3"></a>');
                            }
                        });

                        /******************************************************************************/

                    });

                } else {

                    // Chargement de la page HTML des différents tarifs choisis en option
                    containerPourFondu.hide().load('includes/code/' + valeurOption + '.html', function () {
                        containerPourFondu.fadeIn('750');
                    });

                }
                // On lance la fonction qui va chercher les tarifs
                /******************************************************************************/

                $(function () {
                    // Test de la catégorie pour l'affichage des prix avec un switch
                    let urlJson = "";

                    switch (valeurOption) {
                        case 'gateaux':
                            urlJson = 'json/tarifs-patisserie.json';
                            break;
                        case 'anniversaire':
                            urlJson = 'json/tarifs-anniversaire.json';
                            break;
                        case 'aperitif':
                            urlJson = 'json/tarifs-aperitif.json';
                            break;
                        default:
                            return false;
                    };

                    // Affichage des prix en fonction de la catégorie choisie
                    $.getJSON(urlJson, function (tarifs) {

                        // Boucle pour afficher chaque tarif au bon endroit
                        for (let tarifsId in tarifs) {
                            $(tarifsId).html(tarifs[tarifsId]);
                        }
                    });
                });
                /*******************************************************************************/
            }
        }, 500); // Fin du setTimeout()
    });
});


