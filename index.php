<?php session_start() ?>
<?php include "requireSSL.php" ?>

<!DOCTYPE HTML>
<!--
	Prologue by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	Who has time to create their own personal website, am I right? (Just kidding, I'm working on it, it's just not high priority)
-->
<html>
	<head>
		<title>The Outpost | Front-end web development</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,600">
		<link rel="stylesheet" href="assets/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/main.css">
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<div id="header">

				<div class="top">

					<!-- Logo -->
						<div id="logo">
							<span class="image avatar48"><img src="images/avatar.png" alt="" /></span>
							<h1 id="title">the outpost</h1>
							<p>front-end web design &amp;<br>development</p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Home</span></a></li>
								<li><a href="#portfolio" id="portfolio-link" class="skel-layers-ignoreHref"><span class="icon fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link" class="skel-layers-ignoreHref"><span class="icon fa-user">About</span></a></li>
								<li><a href="#contact" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-envelope">Contact</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

					<!-- Social Icons -->
						<ul class="icons">
							<li><a href="https://github.com/astranomaly" title="github" class="icon fa-github"><span class="label">Github</span></a></li>
							<li><a href="https://pixelfed.social/Vesper" title="pixelfed" class="icon fa-instagram"><span class="label">Photos</span></a></li>
							<li><a href="https://twitter.com/Astranomaly" title="twitter" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://ca.linkedin.com/in/jonjreimer" title="linkedin" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a href="mailto:hi@theoutpost.dev" title="email" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

		<!-- Main -->
			<div id="main">

				<!-- Intro -->
					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hey! My name's <strong>Jon Reimer</strong> and I design tiny universes that exist on&nbsp;the&nbsp;internet.</h2>
								<p>I'm currently stationed near Calgary, Alberta. Sometimes I tap my keyboard for a bit, only to discover that a new website or app has manifested&nbsp;itself.</p>
							</header>

						</div>
					</section>

				<!-- Portfolio -->
					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<div class="row">
								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="storage.php" class="image fit"><img src="images/storage.jpg" alt="" /></a>
										<header>
											<h3>Blackie Mini Storage</h3>
										</header>
									</article>
									<article class="item">
										<a href="mine.php" class="image fit"><img src="images/mine.jpg" alt="" /></a>
										<header>
											<h3>Mineshaft Mishap</h3>
										</header>
									</article>
									<article class="item">
										<a href="safari.php" class="image fit"><img src="images/safari.jpg" alt="" /></a>
										<header>
											<h3>Secondhand Safari</h3>
										</header>
									</article>
								</div>

								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="twib.php" class="image fit"><img src="images/twib.jpg" alt="" /></a>
										<header>
											<h3>the.weather.is.beautiful</h3>
										</header>
									</article>
									<article class="item">
										<a href="carpentry.php" class="image fit"><img src="images/carpentry.jpg" alt="" /></a>
										<header>
											<h3>Reimer Carpentry</h3>
										</header>
									</article>
									<article class="item">
										<a href="shadow.php" class="image fit"><img src="images/shadow.jpg" alt="" /></a>
										<header>
											<h3>The Shadowlands</h3>
										</header>
									</article>
								</div>

								<div class="4u$ 12u$(mobile)">
									<article class="item">
										<a href="space.php" class="image fit"><img src="images/invade.jpg" alt="" /></a>
										<header>
											<h3>Space Invaders: Astranomaly</h3>
										</header>
									</article>
									<article class="item">
										<a href="vox.php" class="image fit"><img src="images/vox.jpg" alt="" /></a>
										<header>
											<h3>Vox Motu</h3>
										</header>
									</article>
									<article class="item">
										<a href="salsa.php" class="image fit"><img src="images/salsa.jpg" alt="" /></a>
										<header>
											<h3>S.A.L.S.A Writer</h3>
										</header>
									</article>
								</div>
							</div>

						</div>
					</section>

				<!-- About Me -->
					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>About</h2>
							</header>

							<img class="image featured" src="images/pic08.jpg" alt="" />

							<p>I'm a front-end web developer with some experience in graphic design &amp; back-end languages. For some reason I find "information processing" and "educational apps" to be interesting, but sadly haven't had the opportunity to work on any. I would love to make learning as exciting &amp; fun for other people as it is for me. Android development is next on my "to-learn" list, since all my projects ideas seem to start with "hmm, I wish I could do that on my&nbsp;phone".</p>

							<h3>The tech details</h3>
							<p>For any web developer, HTML, CSS, &amp; JavaScript are the bread-and-butter of their skill-set. Unfortunately, those languages are tiresome at best, so I've mixed things up a bit to keep myself excited about coding even when dealing with the basics: <a href="https://pugjs.org/api/getting-started.html">Pug</a> (aka. Jade), <a href="
//sass-lang.com/">Sass</a>, &amp; <a href="
//coffeescript.org/v2">CoffeeScript</a> spice things up nicely <em>and</em> allow for extra efficiency. And because I crave slightly excessive levels of customization, my coding is done in <strong><a href="https://www.sublimetext.com/">Sublime&nbsp;Text</a></strong>.</p>
							<p>Here's a quick rundown of the languages &amp; programs I am most familiar with:<br>
							<strong>Photoshop | HTML5/Pug/Emmet | CSS3/Sass | JS/jQuery/JSON/CoffeeScript | Git/Gulp </strong></p>
							<p>I've also done a fair bit of the following, but am less proficient with them:<br>
							<strong>Illustrator | PHP | MySQL | Node</strong></p>
							<p>I'm also in the process of learning a bunch of new things, such as:<br>
							<strong>Python | Wordpress | MySQLi | Webpack | Angular  </strong></p>

							<h3>Hobbies</h3>
							<p>When I'm not making websites I'm often either playing computer games or out hiking. I'm a hobbyist photographer, and sometimes I dabble in making weird music. I used to draw a lot, but art has taken a backseat to life lately. Usually I spend most of my time daydreaming about traveling &amp; road trips.</p>

						</div>
					</section>

				<!-- Contact -->
					<section id="contact" class="four">
						<div class="container">

							<header>
								<h2>Contact</h2>
							</header>

							<p>Need a website or some slick graphics? Want to discuss something with me? Now's a great time to do those things. Send me an email below. If that seems too easy for you, you can send me an email the old fashioned way at <strong><a href="mailto:hi@astranomaly.com">hi@astranomaly.com</a></strong> or via smoke signals.</p>

							<div id="contact-form">

								<?php
								$cf = array();$sr = false;if(isset($_SESSION['cf_returndata'])){$cf = $_SESSION['cf_returndata'];$sr = true;}
								?>

								<ul id="form-error" class="<?php echo ($sr && !$cf['form-ok']) ? 'visible' : ''; ?>">
									<li id="form-error-info">There were some problems with your form submission:</li>

									<?php
								    if(isset($cf['errors']) && count($cf['errors']) > 0) :
								        foreach($cf['errors'] as $error) :
								    ?>
								    <li><?php echo $error ?></li>
								    <?php
								        endforeach;
								    endif;
								    ?>

								</ul>
								<p id="form-success" class="<?php echo ($sr && $cf['form-ok']) ? 'visible' : ''; ?>">Success! Thanks for your message.</p>
								<form action="mail.php" method="post">
									<div class="row">
										<div class='6u 12u$(mobile)'>
											<input type="text" id="form-name" name="form-name" value="<?php echo ($sr && !$cf['form-ok']) ? $cf['posted_form_data']['form-name'] : '' ?>" placeholder="Name" required="required">
										</div>
										<div class="6u$ 12u$(mobile)">
											<input type="email" id="form-email" name="form-email" value="<?php echo ($sr && !$cf['form-ok']) ? $cf['posted_form_data']['form-email'] : '' ?>" placeholder="Email" required="required">
										</div>
										<div class="12u$">
											<select id="form-subject" name="form-subject">
												<option value="" disabled selected>Click to select subject</option>
												<option value="Inquiry" <?php echo ($sr && !$cf['form-ok'] && $cf['posted_form_data']['form-subject'] == 'inquiry') ? "selected='selected'" : '' ?>>General Inquiry</option>
												<option value="WebDev" <?php echo ($sr && !$cf['form-ok'] && $cf['posted_form_data']['form-subject'] == 'webdev') ? "selected='selected'" : '' ?>>Web Development</option>
												<option value="GraphicDev" <?php echo ($sr && !$cf['form-ok'] && $cf['posted_form_data']['form-subject'] == 'graphicdev') ? "selected='selected'" : '' ?>>Graphic Design</option>
											</select>
										</div>
										<div class="12u$">
											<textarea id="form-message" name="form-message" placeholder="Message" required="required" data-minlength="20"><?php echo ($sr && !$cf['form-ok']) ? $cf['posted_form_data']['form-message'] : '' ?></textarea>
										</div>
                                        <div class="12u$">
                                            <input type="text" id="form-code" name="form-code" value="" placeholder="Please type the following text: fortread" required="required">
                                        </div>
										<div class="12u$">
											<input type="submit" id="form-submit" value="Send message">
										</div>
									</div>
								</form>

								<?php unset($_SESSION['cf_returndata']); ?>

							</div>

						</div>
					</section>

			</div>

		<!-- Footer -->
			<div id="footer">

				<!-- Copyright -->
					<ul class="copyright">
						<li>&copy; 2019 Jon Reimer</li>
						<li>Design: <a href="
//html5up.net">HTML5 UP</a></li>
					</ul>

			</div>

		<!-- Scripts -->
            <?php include_once("./assets/js/analytics.php") ?>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.validate.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollzer.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
