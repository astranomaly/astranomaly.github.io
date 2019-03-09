<?php

if(isset($_POST['submitted']))
{
	$name = $_POST['name'];
	$addr = trim($_POST['addr']);
	$mssg = $_POST['mssg'];

	$sendTo   = "hi@astranomaly.com";
	$subject  = "$name VIA Astranomaly Contact Form";
	$content  = "FROM: $name ($addr)\n\n$mssg";
	$mailhead = "From: $addr \r\n";

	mail($sendTo,$subject,$content,$mailhead) or die("<p>ERROR: Something went wrong and your message was not sent! Oops!</p>");
	echo "<p>Thanks for the message! You should hear back from me shortly.</p>";
}

?>