$(function () {

    // Instructions en Ajax pour effectuer l'affichage des différentes catégories (tarifs et galerie photos) avec un fondu et un spinner d'attente de chargement

    $('#categorie').change(function () { // Fonction majeure pour la sélection d'une option

        // Affichage du spinner bootstrap au cas où la réponse AJAX se fait attendre
        $('#afficheCategorie').html('<div class="row justify-content-center"><div class="spinner-grow" role="status"><span class="sr-only">chargement...</span></div></div>');

        let valeurOption = $('#categorie option:selected').val(); // On récupère la valeur de l'option du select dans la variable valeurOption
        let containerPourFondu = $('#afficheCategorie'); // Variable pour initialiser le fondu

        // Recharge la page par défaut tarifs.html ou galerie.html en cas de clic sur 'Séléctionnez une catégorie'
        if (valeurOption == 'page-tarifs' || valeurOption == 'page-galerie') {

            if (valeurOption == 'page-tarifs') {
                let urlDefaut = "tarifs.html";
                $(location).attr('href', urlDefaut);
            } else {
                let urlDefaut = "galerie.html";
                $(location).attr('href', urlDefaut);
            }

        } else {

            // Test si on choisi une catégorie dans la galerie photos
            if (valeurOption == 'cupcakes' || valeurOption == 'entremet' || valeurOption == 'gateau-pate-a-sucre' || valeurOption == 'layer-cake' || valeurOption == 'macarons' || valeurOption == 'number-letter-cake') {

                // Chargement de la page HTML avec un fondu en fonction de l'option sélectionnée dans la galerie photo
                containerPourFondu.hide();
                containerPourFondu.fadeIn('slow').load('includes/code/trame-photos.html', function () {


                    // Instructions d'affichage de la galerie photos
                    /******************************************************************************/

                    let urlPhoto = "";
                    let nombrePhotos = 9; // Nombre de photos par page
                    let theme = ""; // Va rajouter le thème dans le titre

                    // Test du type de l'option choisie avec un switch pour affichage des photos
                    switch (valeurOption) {

                        case 'cupcakes':
                            urlPhoto = "galerie-photos/cupcakes/cup-cake-";
                            theme = "sur le thème des cupcakes";
                            break;
                        case 'entremet':
                            urlPhoto = "galerie-photos/entremet/entremet-";
                            theme = "sur le thème des entremets";
                            break;
                        case 'gateau-pate-a-sucre':
                            urlPhoto = "galerie-photos/gateau-pate-a-sucre/gateau-pate-a-sucre-";
                            theme = "sur le thème des gâteaux à pâte à sucre";
                            break;
                        case 'layer-cake':
                            urlPhoto = "galerie-photos/layer-cake/layer-cake-";
                            theme = "sur le thème des layer cakes";
                            break;
                        case 'macarons':
                            urlPhoto = "galerie-photos/macarons/macaron-";
                            theme = "sur le thème des macarons";
                            break;
                        case 'number-letter-cake':
                            urlPhoto = "galerie-photos/number-letter/number-letter-";
                            theme = "sur le thème des number ou letter cakes";
                            break;
                    }
                    $('#themePhoto').append(theme); // Affichage du thème dans le titre

                    // Boucle pour effectuer l'affichage des photos où nombrePhotos représente le nombre de photos à afficher
                    for (let numeroPhoto = 1; numeroPhoto <= nombrePhotos; numeroPhoto++) {
                        $('#afficheGaleriePhotos').append('<a href="' + urlPhoto + numeroPhoto + '.jpg" data-toggle="lightbox" data-gallery="gallery" class="col-md-3"><img src="' + urlPhoto + numeroPhoto + '-thumb.jpg" alt="Photo ' + urlPhoto + ' de cupcakes" class="img-thumbnail shadow w-25 mb-3"></a>');
                    }

                    /******************************************************************************/
                });

            } else {

                // Sinon on charge la page HTML des différents tarifs choisis en option
                containerPourFondu.hide();
                containerPourFondu.fadeIn("slow").load('includes/code/' + valeurOption + '.html', function () {


                    // On lance les instructions qui vont chercher les tarifs
                    /******************************************************************************/

                    let urlJsonTarifs = "";

                    // Test de la catégorie pour l'affichage des prix avec un switch
                    switch (valeurOption) {
                        case 'gateaux':
                            urlJsonTarifs = 'json/tarifs-patisserie.json';
                            break;
                        case 'anniversaire':
                            urlJsonTarifs = 'json/tarifs-anniversaire.json';
                            break;
                        case 'aperitif':
                            urlJsonTarifs = 'json/tarifs-aperitif.json';
                            break;
                    };

                    // Fonction pour l'affichage des prix en fonction de la catégorie choisie
                    $.getJSON(urlJsonTarifs, function (tarifs) {

                        // Boucle for in pour afficher chaque tarif au bon endroit
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


