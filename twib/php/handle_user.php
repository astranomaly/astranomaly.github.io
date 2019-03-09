<?php

//#### LOGIN & REGISTRATION ####///////////////////////////////////////////////////////////////////

//#### FUNCTIONS ####//////////////////////////////////////////////////////////////////////////////

//----------// RUN REGISTRATION //---------------------------------------------------------------//
function register()
{
	// Connect to DB
	require("../../../framework/twib_connect.php");

	// Get required info
	$email     = $_POST['email'];
	$password  = $_POST['password'];
	$pass_conf = $_POST['password_conf'];

	// Make info more secure
	$email     = trim($email);
	$password  = trim($password);
	$password  = md5($password);
	$pass_conf = trim($pass_conf);
	$pass_conf = md5($pass_conf);

	// Have all the text fields been filled?
	if(empty($email))
	{
		$incomplete = true;
	}
	if(empty($password))
	{
		$incomplete = true;
	}
	if(empty($pass_conf))
	{
		$incomplete = true;
	}

	// If any of them are empty, display the login again.
	if($incomplete === true)
	{
		//include("form_reg.php");
		die("<p>Please fill out <em>all</em> the boxes next time.</p><p><a href='index.php'>[BACK]</a>");
	}

	// Do the PASSWORDS match?
	if($password !== $pass_conf)
	{
		//include("form_reg.php");
		die("<p>Please make sure your password is the same in <em>both</em> boxes.</p><p><a href='index.php'>[BACK]</a>");
	}

	// Is the EMAIL already in use?
	$email_check    = "SELECT EMAIL
					   FROM users
					   WHERE EMAIL = '$email'";
	$email_result   = mysql_query($email_check);
	$do_email_check = mysql_num_rows($email_result);

	// Throw errors, if needed.
	if($do_email_check > 0)
	{
		die("<p>Sorry, but that email is already being used.</p><p><a href='index.php'>[BACK]</a>");
	}

	// If everything checks out, register the user
	$insert = "INSERT INTO users (EMAIL,PASSWORD)
			   VALUES ('$email','$password')";
	$result = mysql_query($insert);

	// If the MySQL insert fails, say why
	if(!$result)
	{
		die("<p>There was a little problem: ".mysql_error()."</p><p><a href='index.php'>[BACK]</a>");
	}

	logger($email,$password);
}

//----------// RUN LOGIN //-----------------------------------------------------------------------------------------------//
function login($email,$pass_md5)
{
	// Connect to DB
	require("../../../framework/twib_connect.php");

	// Check if function wasn't called from REGISTER()
	if($email === '' && $pass_md5 === '')
	{
		// Get required info
		$email    = $_POST['email'];
		$password = $_POST['password'];
		// Make info more secure
		$email    = trim($email);
		$password = trim($password);
		$pass_md5 = md5($password);
	}

	logger($email,$pass_md5);
}

//----------// LOGIN //---------------------------------------------------------------------------------------------------//
function logger($u,$p)
{
	if($u != '' && $p != '')
	{
		// See if there is anything associated with the info
		$verify = "SELECT *
				   FROM users
				   WHERE EMAIL = '$u'
				   AND PASSWORD = '$p'";
		$result = mysql_query($verify);
		$numRow = mysql_num_rows($result);

		// If the user exists, start the session
		if($numRow === 1)
		{
			while($row = mysql_fetch_array($result))
			{
				$_SESSION['id']    = $row['ID'];
				$_SESSION['email'] = $row['EMAIL'];

				// If they want to stay logged in, do so for a month
				if(isset($_POST['save']))
				{
					setcookie("login",$_SESSION['id'],time()+86400*30,'/');
				}
			}
		}
		// Otherwise, throw an error
		else
		{
			die("<p>Incorrect login information.</p><p><a href='index.php'>[BACK]</a></p>");
		}
	}
}

?>
