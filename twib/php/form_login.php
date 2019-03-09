<?php

echo "<form action='?act=login' method='post'>"
		."<fieldset>"
			."<legend>Login</legend>"
			."<input type='text' size='30' name='email' placeholder='Email'><br>"
			."<input type='password' size='30' name='password' placeholder='Password'><br>"
			."<input type='submit' name='login' class='logButton' value='Login'>"
		."</fieldset>"
	."</form>";

?>