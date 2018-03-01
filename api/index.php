<?php 

class Input {
	public $name = "input";
	public $type = "text";
	public $value = "0";
	public $id = "";
	public $class = "default_input";
}


$users = array(array('id' => 1, 'name' => 'Serega'));

$response = [];
foreach ($users as $i => $user) {
	$input = new Input();
	$input->type = "text";
	$input->value = $user["name"];
	$input->id = "user_".$user["id"];

	$response[$i] = $input;
}

$response = json_encode($response);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-CSRF, X-XSRF-TOKEN");
header('Content-Type: application/json');

echo $response;
exit();