<?php

//#### DATABASE COMMUNICATION via JQUERY ####///////////////////////////////////////////////////////////////////////////////

$task = $_REQUEST['task'];
$subj = $_REQUEST['subj'];
$is_a = $_REQUEST['is_a'];
$from = $_REQUEST['from'];

if($task === 'update')
{
	require('../../../../framework/twib_connect.php');

	if($subj === 'default')
	{
		$loc = 'MAIN_LOC';
	}
	else if($subj === 'fav1')
	{
		$loc = 'FAV_1';
	}
	else if($subj === 'fav2')
	{
		$loc = 'FAV_2';
	}else if($subj === 'system')
	{
		$loc = 'SYS';
	}

	$update = "UPDATE users
			   SET $loc = '$is_a'
			   WHERE ID = $from";
	$result = mysql_query($update);
}
else if($task === 'select')
{
	require('../../../../framework/twib_connect.php');

	if($subj === 'default')
	{
		$select = "SELECT *
				   FROM users
				   WHERE ID = $from";
		$result = mysql_query($select);

		while($row = mysql_fetch_array($result))
		{
			$main = $row['MAIN_LOC'];
			$fav1 = $row['FAV_1'];
			$fav2 = $row['FAV_2'];
			$sys  = $row['SYS'];
		}
	}

	sendJSON($main,$fav1,$fav2,$sys);
}

//----------// SEND JSON //-----------------------------------------------------------------------------------------------//
function sendJSON($send,$f1,$f2,$s)
{
	echo
	'{
		"data":
		{
			"result":"'.$send.'",
			"fav1":"'.$f1.'",
			"fav2":"'.$f2.'",
			"sys":"'.$s.'"
		}
	}';
}

?>
