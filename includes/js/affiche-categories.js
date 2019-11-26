$(function () {

    // Instructions en Ajax pour effectuer l'affichage des différentes catégories (tarifs et galerie photos) avec un fondu

    // Sélection de la catégorie dans le menu
    $('.dropdown-menu li').on('click', function () {
        var valeurOption = $(this).attr('id');

        var containerPourFondu = $('#afficheCategorie'); // Variable pour initialiser le fondu

        // Test si on choisi une catégorie dans la galerie photos
        if (valeurOption == 'cupcakes' || valeurOption == 'entremet' || valeurOption == 'gateau-pate-a-sucre' || valeurOption == 'layer-cake' || valeurOption == 'macarons' || valeurOption == 'number-letter-cake') {

            // Chargement de la page HTML avec un fondu en fonction de l'option sélectionnée dans la galerie photo
            containerPourFondu.hide();
            containerPourFondu.fadeIn('slow').load('includes/code/trame-photos.html', function () {

                // Instructions d'affichage de la galerie photos
                /******************************************************************************/

                var urlPhoto = "";
                var nombrePhotos = 9; // Nombre de photos par page
                var theme = ""; // Va rajouter le thème dans le titre
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
                for (var numeroPhoto = 1; numeroPhoto <= nombrePhotos; numeroPhoto++) {
                    $('#afficheGaleriePhotos').append('<a href="' + urlPhoto + numeroPhoto + '.jpg" data-toggle="lightbox" data-gallery="gallery" class="col-md-3"><img src="' + urlPhoto + numeroPhoto + '-thumb.jpg" alt="Photo ' + theme + '" class="img-thumbnail shadow w-25 mb-3"></a>');
                }

                /******************************************************************************/
            });

        } else {

            // Sinon on charge la page HTML des différents tarifs choisis en option
            containerPourFondu.hide();
            // Chainage du fondu et de la méthode de chargement
            containerPourFondu.fadeIn("slow").load('includes/code/' + valeurOption + '.html', function () {

                // On lance les instructions qui vont chercher les tarifs dans des fichiers JSON
                /******************************************************************************/

                var urlJsonTarifs = "";

                // Test de la catégorie pour l'affichage des prix (dans un fichier json) avec un switch
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

                // Méthode getJSON pour l'affichage des prix en fonction de la catégorie choisie
                $.getJSON(urlJsonTarifs, function (tarifs) {

                    // Boucle for in pour afficher chaque tarif au bon endroit
                    for (var tarifsId in tarifs) {
                        $(tarifsId).html(tarifs[tarifsId]);
                    }
                });

                /*******************************************************************************/
            });
        }
    });
});


