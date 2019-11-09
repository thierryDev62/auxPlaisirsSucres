<?php

$donnees['#navette'] = '1,10€';
$donnees['#miniBurger'] = '1,20€';
$donnees['#verrine'] = '1,30€';
$donnees['#feuillete'] = '0,80€';
$donnees['#bouchee'] = '0,80€';
$donnees['#clubSandwich'] = '1,00€';
$donnees['#miniBlinis'] = '0,90€';
$donnees['#wraps'] = '0,90€';
$donnees['#miniQuiche'] = '0,80€';
$donnees['#macaronsAperitif'] = '1,00€';

header('Content-type: application/json; charset=UTF-8');
echo json_encode($donnees);
?>