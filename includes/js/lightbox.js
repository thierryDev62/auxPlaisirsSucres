// Lightbox est un plugin récupéré

$(document).ready(function () {
    // Lightbox de la galerie
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });

});