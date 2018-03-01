<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-CSRF, X-XSRF-TOKEN");
header('Content-Type: application/json');
$response = json_encode(array('api_test' => ""));



echo $response;