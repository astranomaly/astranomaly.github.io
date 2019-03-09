<?php

echo "<form action='?act=register' method='post'>"
		."<fieldset>"
			."<legend>Register</legend>"
			."<input type='text' size='30' name='email' placeholder='Email'><br>"
			."<input type='password' size='30' name='password' placeholder='Password'><br>"
			."<input type='password' size='30' name='password_conf' placeholder='Confirm Password'><br>"
			."<input type='submit' class='logButton' value='Register'>"
		."</fieldset>"
	."</form>";

?>