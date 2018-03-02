<?php 
if (isset($_GET["action"])) {
	switch ($_GET["action"]) {
		case 'api_test':
			$response = array("WOW" => "This shit is working!", "Well done!" => "Go next!");
			echo json_encode($response);
			break;
		default:
			$response = array("empty");
			echo json_encode($response);
			break;
	}
}else{
	echo "failed";
}
