$(document).ready(function () {

    // Lightbox de la galerie (un plugin récupéré)
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });
    });
});




