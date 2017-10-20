<?php

header("Access-Control-Allow-Origin: *");
// ova 2 header-a imaju veze sa POST metodom.Prvi nabraja koje tipove header-a dozvoljava
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// koje sve metode ovaj server dozvoljava
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$data = json_decode(file_get_contents('php://input'), true);
// die($data);
// var_dump($data);

echo json_encode(array(
	'id' => 10,
	'firstName' => $data['firstName'],
	'lastName' => $data['lastName'],
	'email' => $data['email']
));
