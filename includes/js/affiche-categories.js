$(function () {

    // Instructions en Ajax pour effectuer l'affichage des différentes catégories avec un fondu et un spinner d'attente de chargement

    $('#categorie').change(function () {

        // Affichage du spinner bootstrap
        $('#afficheCategorie').html('<div class="row justify-content-center"><div class="spinner-grow" role="status"><span class="sr-only">chargement...</span></div></div>');

        let valeurOption = $('#categorie option:selected').val(); // On récupère la valeur de l'option du select dans la variable valeurOption
        let containerPourFondu = $('#afficheCategorie'); // Variable pour initialiser le fondu

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
            if (valeurOption == 'cupcakes' || valeurOption == 'entremet' || valeurOption == 'gateau-pate-a-sucre' || valeurOption == 'layer-cake' || valeurOption == 'macarons' || valeurOption == 'number-letter-cake') {

                // Chargement de la page HTML avec un fondu en fonction de l'option sélectionnée dans la galerie photo
                containerPourFondu.hide().load('includes/code/trame-photos.html', function () {
                    containerPourFondu.fadeIn('750');

                    // Instructions d'affichage de la galerie photos
                    /******************************************************************************/

                    let urlImage = "";
                    let nombreImages = 9; // Nombre d'images par page
                    let theme = ""; // Va rajouter le thème dans le titre
                    switch (valeurOption) {

                        case 'cupcakes':
                            urlImage = "galerie-photos/cupcakes/cup-cake-";
                            theme = "sur le thème des cupcakes";
                            break;
                        case 'entremet':
                            urlImage = "galerie-photos/entremet/entremet-";
                            theme = "sur le thème des entremets";
                            break;
                        case 'gateau-pate-a-sucre':
                            urlImage = "galerie-photos/gateau-pate-a-sucre/gateau-pate-a-sucre-";
                            theme = "sur le thème des gâteaux à pâte à sucre";
                            break;
                        case 'layer-cake':
                            urlImage = "galerie-photos/layer-cake/layer-cake-";
                            theme = "sur le thème des layer cakes";
                            break;
                        case 'macarons':
                            urlImage = "galerie-photos/macarons/macaron-";
                            theme = "sur le thème des macarons";
                            break;
                        case 'number-letter-cake':
                            urlImage = "galerie-photos/number-letter/number-letter-";
                            theme = "sur le thème des number ou letter cakes";
                            break;
                    }
                    $('#themePhoto').append(theme); // Affichage du thème dans le titre

                    // Boucle pour l'affichage de 9 images
                    for (let numeroImage = 1; numeroImage <= nombreImages; numeroImage++) {
                        $('#afficheGaleriePhotos').append('<a href="' + urlImage + numeroImage + '.jpg" data-toggle="lightbox" data-gallery="gallery" class="col-md-3"><img src="' + urlImage + numeroImage + '-thumb.jpg" alt="Photo ' + urlImage + ' de cupcakes" class="img-thumbnail shadow w-25 mb-3"></a>');
                    }


                    /******************************************************************************/

                });

            } else {

                // Chargement de la page HTML des différents tarifs choisis en option
                containerPourFondu.hide().load('includes/code/' + valeurOption + '.html', function () {
                    containerPourFondu.fadeIn('750');

                    // On lance les instructions qui vont chercher les tarifs
                    /******************************************************************************/


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

                    /*******************************************************************************/

                });

            }
        }
    });
});


