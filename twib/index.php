<?php

if($_SERVER["HTTPS"] === "on")
{
    header("Location: http://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
}

session_start();// Start a session

// If logout was clicked..
if(isset($_GET['kickedOut']))
{
	if($_GET['kickedOut'] === 'true')
	{
		//..reset the session
		$_SESSION = array();
		session_destroy();
		setcookie('login','',time()-86400*300);
	}
}

// If an action was clicked..
if(isset($_GET['act']))
{
    // Get the action
    $act = $_GET['act'];

    include('php/handle_user.php');

    // Test the action
    if($act === "login")
    {
        login('','');
    }
    else if($act === "register")
    {
        register();
    }
}

?>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="A dynamic, visual representation of the weather outside your house.">
    <meta name="keywords" content="aesthetic,weather,beautiful,forecast,design,dynamic">
    <meta name="viewport" content="width=device-width">
    <title>the.weather.is.beautiful</title>
    <link type="text/css" rel="stylesheet" href="
//fonts.googleapis.com/css?family=Wire+One">
    <link type="text/css" rel="stylesheet" href="css/vendor/normalize.css">
    <link type="text/css" rel="stylesheet" href="css/vendor/boilerplate.css">
    <link type="text/css" rel="stylesheet" href="css/vendor/dot-luv/jquery-ui-1.10.0.custom.css">
    <link type="text/css" rel="stylesheet" href="css/main.css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/vendor/bigtext.js"></script>
    <script type="text/javascript" src="js/vendor/modernizr-2.6.2.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/pocketwatch.js"></script>
    <script type="text/javascript" src="js/weatherman.js"></script>
    <script type="text/javascript" src="js/click.js"></script>
    <script type="text/javascript" src="js/magicbook.js"></script>
    <?php if(isset($_SESSION['id'])||isset($_COOKIE['login'])){ ?>
        <script>
            var logged = true;
            var userID = <?php echo json_encode($_SESSION['id']); ?>;
        </script>
    <?php } ?>
</head>

<body>
<div id="bg">
	<!--[if lt IE 7]>
    	<p class="chromeframe">I'm sorry, but you seem to be using an <strong>outdated</strong> browser. Please <a href="
//browsehappy.com/">upgrade your browser</a> or <a href="
//www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
    <noscript>
        <div class="ui-state-error">JavaScript is required to view this site. Please adjust your browser's settings to enable JavaScript. Thanks!</div>
    </noscript>
    <div id="wrapper">
    	<header>
            <h1 class="button title">the.weather.is.<span class="randomWord">beautiful</span></h1>
        </header>

        <section id="weather">
        	<div class="resultBox bigtext">
                <div class='location'>Loading...</div>
                <div class='province'></div>
            </div><!--.resultBox-->

            <div class='tempBox bigtext'>
                <div class='temp'></div>
            </div><!--.tempBox-->

            <div class='clock'>
                <div class='hider'><span class='hours'></span>:<span class='min'></span><span class='xm'></span></div>
                <div class='bigtext'>
                    <div class='date'></div>
                    <div class='time'></div>
                </div>
            </div><!--.clock-->

            <section class="login">
            	<?php
            		if(isset($_SESSION['id'])||isset($_COOKIE['login']))
            		{
            			echo '<a id="logout" href="index.php?kickedOut=true">Log Out?</a>';
            		}
            		else
					{
						echo '<div class="hideContain"><p class="button">Login / Register</p><div id="logForms" class="hider">';
						include("php/form_login.php");
                        include("php/form_reg.php");
						echo '</div></div>';
					}
            	?>
            </section><!--.login-->

            <nav class="main">
                <div class="button" id="uBack"></div>
                <div class="button" id="dBack"></div>
                <div class="button" id="up"></div>
                <div class="button" id="left"></div>
                <div class="button" id="right"></div>
                <div class="button" id="down"></div>
            </nav><!--.main-->

            <section class='astro'>
                <img class='sun'>
            </section><!--.astro-->

            <section class='enviro'>
                <section class='tree'>
                </section><!--.tree-->

                <section class='ground'>
                </section><!--.ground-->
            </section><!--.enviro-->
        </section><!--#weather-->

        <section id="settingsMenu">
            <div id="pickLoc">
                <ul class="horizontal">
                    <li id="default" class="button selected">Default</li>
                    <li id="fav1" class="button">Fav1</li>
                    <li id="fav2" class="button">Fav2</li>
                </ul>
            </div><!--#pickLoc-->

            <div class="ui-widget">
                <input type="text" id="autocomplete" placeholder="City" />
                <script type="text/javascript" src="js/autocom.js"></script><br>
            </div><!--.ui-widget-->

            <br>
            Give me a...
            <form>
                <input type="radio" name="theSys" id="radC" value="C">&deg;C!<br>
                <input type="radio" name="theSys" id="radF" value="F">&deg;F!<br>
                <input type="radio" name="theSys" id="radK" value="K">K!
            </form>

            <br>
            <div class="button" id="save">Change It</div>

            <nav class="main">
                <div class="button" id="rBack"></div>
            </nav><!--.main-->

            <section class='tree'>
            </section><!--.tree-->
        </section><!--#settings menu-->

        <section id='infoPage'>
            <p>Forecast: 83% chance of this page coming soon</p>

            <nav class="main">
                <div class="button" id="lBack"></div>
            </nav><!--.main-->
        </section><!--#infoPage-->

        <footer>
            Weather data provided by <a href="//www.wunderground.com/?apiref=dcce31f720628bd9" target="new"><img src='img/rsc/link.wunderground.png'></a> Website designed and coded by <a href="//astranomaly.com" name="Jon J Reimer" target="new">Jon J Reimer</a>. &copy; <span class="year"></span>
        </footer>
    </div><!--#wrapper-->
</div><!--#bg-->
<?php include_once("../assets/js/analytics.php") ?>
</body>
</html>
