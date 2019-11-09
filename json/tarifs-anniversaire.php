<?php

$donnees['#baby'] = '9,00€';
$donnees['#gourmand'] = '12,00€';
$donnees['#ultraGourmand'] = '15,00€';
$donnees['#ado'] = '20,00€';

header('Content-type: application/json; charset=UTF-8');
echo json_encode($donnees);
?>