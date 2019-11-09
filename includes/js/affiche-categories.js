$(document).ready(function () {

    // Ajax pour effectuer l'affichage des différentes catégories avec un fondu et un spinner d'attente de chargement

    $('#categorie').change(function () {

        // Affichage du spinner bootstrap
        $('#afficheCategorie').html('<div class="row justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">chargement...</span></div></div>');
        
        let temp = $('#categorie option:selected').val(); // On récupère la valeur de l'option du select dans la variable temp
        let box = $('#afficheCategorie'); // Variable pour initialiser le fondu

        // Un peu de temps pour que l'affichage ne soit pas brut
        setTimeout(function () {
            // Recharge la page par défaut en cas de clic sur 'Séléctionnez une catégorie'
            if (temp == 'page-tarifs' || temp == 'page-galerie') {

                if (temp == 'page-tarifs') {
                    let url = "tarifs.html";
                    $(location).attr('href', url);
                } else {
                    let url = "galerie.html";
                    $(location).attr('href', url);
                }

            } else {

                box.hide().load('includes/code/' + temp + '.html', function () {
                    box.fadeIn('750');
                    return false;
                });

                // On lance la fonction qui va chercher les tarifs
                /******************************************************************************/
                
                $(function() {
                    // Test de la catégorie pour l'affichage des prix avec un switch
                    let urlJson = "";

                    switch(temp) {
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


