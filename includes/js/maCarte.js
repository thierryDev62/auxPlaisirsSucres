// Script d'affichage de la carte sur contact.html

// On initialise la latitude et la longitude de l'adresse d'Aux Plaisirs Sucrés à Haillicourt (centre de la carte)
var lat = 50.4676822;
var lon = 2.5603700000000345;
var macarte = null;

// Fonction d'initialisation de la carte
function initMap() {

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 16);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>&nbsp&nbsp',
        minZoom: 10,
        maxZoom: 18
    }).addTo(macarte);

    // Nous ajoutons un marqueur
    var marker = L.marker([lat, lon]).addTo(macarte);
    marker.bindPopup("<h3>Aux Plaisirs Sucrés</h3><br>10, rue Roger Salengro<br>62940 Haillicourt<br>07 88 35 83 65").openPopup();
}

window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};