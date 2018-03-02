<?php 

class Input {
	public function __constructor($properties){
		foreach ($properties as $property => $value) {
	        $this->$property = $value;
	    }
	}
	public $relation = "input";

	public $name = "";
	public $type = "text";
	public $value = "";
	public $id = "";
	public $class = ["default_i"];
}

class Table {
	public function __constructor($properties){
		foreach ($properties as $property => $value) {
	        $this->$property = $value;
	    }
	}
	public $relation = "table";

	public $id = "";
	public $class = ["default_t"];
	public $cols = [];
	public $rows = [];
}



$users = array(array('id' => 1, 'name' => 'Serega'), array('id' => 1, 'name' => 'Valera'));

$response = [];
// foreach ($users as $i => $user) {
// 	$response[$i] = new Input(['type' => "text", "value" => $user["name"], "name" => "user", "id" => "user_".$user["id"]]);
// }
$tbl = new Table(['class' => ['class1', 'class2']]);
$tbl->rows = $users;
$tbl->cols = ['id', 'name'];



array_push($response, $tbl);



$response = json_encode($response);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-CSRF, X-XSRF-TOKEN");
header('Content-Type: application/json');

echo $response;
exit();

