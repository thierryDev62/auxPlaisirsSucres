$(function() {
    $('#categorie').change(function() {
        var temp = $('#categorie option:selected').val();
        $('#afficheCategorie').load('includes/code/' + temp + '.html');
    });
});