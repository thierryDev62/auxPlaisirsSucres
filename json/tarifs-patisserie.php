<?php

$donnees['#entremetSimple'] = '2,80€';
$donnees['#entremetPhoto'] = '3,00€';
$donnees['#layerCake'] = 'à partir de 3,20€';
$donnees['#gateauPateASucre'] = 'à partir de 4,00€';
$donnees['#numberOuLetterCake'] = '3,00€';
$donnees['#macarons'] = '1,00€ pièce';
$donnees['#cupcakes'] = '1,00€ pièce';
$donnees['#cupcakesATheme'] = '1,50€ pièce';
$donnees['#popsCakes'] = '0,60€ pièce';
$donnees['#plateauDeMignardises'] = '22,50€';

header('Content-type: application/json; charset=UTF-8');
echo json_encode($donnees);
?>