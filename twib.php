<!DOCTYPE HTML>
<?php include "requireSSL.php" ?>
<html>
	<head>
		<title>Portfolio | t.w.i.b</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="
//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,600">
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
							<h1 id="title">astranomaly</h1>
							<p>cosmic adventurer<br>&amp; web developer</p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-chevron-circle-up">Top</span></a></li>
								<li><a href="#info" id="info-link" class="skel-layers-ignoreHref"><span class="icon fa-info-circle">Information</span></a></li>
								<!-- <li><a href="#screenshots" id="screenshots-link" class="skel-layers-ignoreHref"><span class="icon fa-picture-o">Screenshots</span></a></li> -->
								<li id="back-link"><a href="index.php#portfolio"><span class="icon fa-chevron-circle-left">Back</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

					<!-- Social Icons -->
						<ul class="icons">
							<li><a href="https://bitbucket.org/Astranomaly" title="bitbucket" class="icon fa-bitbucket"><span class="label">Bitbucket</span></a></li>
							<li><a href="
//xenrin.deviantart.com" title="deviantart" class="icon fa-deviantart"><span class="label">deviantArt</span></a></li>
							<li><a href="https://twitter.com/Astranomaly" title="twitter" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://ca.linkedin.com/in/jonjreimer" title="linkedin" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a href="mailto:hi@astranomaly.com" title="email" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

		<!-- Main -->
			<div id="main">

				<!-- Intro -->
					<section id="top" class="one dark cover twib">
						<div class="container">

							<header>
								<h2 class="alt">the.weather.is.beautiful</h2>
								<p>A passive web-app to simplify the forecast</p>
							</header>

						</div>
					</section>

				<!-- About Me -->
					<section id="info" class="two">
						<div class="container">

							<header>
								<h2>Information</h2>
							</header>

							<!-- <img class="image featured" src="images/pic08.jpg" alt="" /> -->

							<p>These days, nearly everyone checks the weather online. So why is it that all the popular weather sites are so unintuitive and bland? <strong>The Weather Is Beautiful</strong> (aka. TWIB) is my attempt to fix these problems. There is no clutter. There is no adspace. There is just the weather.</p>
							<p>And the weather is beautiful.</p>
							<p>This project is a proof-of-concept for a single-serving weather web-app that is dynamically driven and focused on visual aesthetics. Is it the middle of the day? The background will change to a soft blue to reflect this. Nighttime? It's now a deep purple. Your location is automatically detected, but by signing up you can change your location and save two favourites.</p>
							<p>Right now, most of the dynamic content is only partially implemented. In the future, rain &amp; snow will cause rain &amp; snow animations, plants will flourish based on the season, and temperature will affect the colour of the site, among many planned features. For now, it's just a simple, no-nonsense weather site.</p>
							<p><a href='/twib'>Click here to try the demo</a>. Try logging in with:</p>
							<blockquote><p>
								<strong>email:</strong> test@test.com<br>
								<strong>pass:</strong> test
							</p></blockquote>

							<h3>Technologies</h3>
							<p>TWIB is based on a framework of <strong>HTML</strong>, <strong>CSS</strong>, and <strong>jQuery</strong>. It uses <strong>AJAX</strong> to receive <strong>JSON</strong> from the <a href="
//www.wunderground.com/?apiref=dcce31f720628bd9">Weather Underground</a>'s <strong>API</strong>, which is then used to update the website's design and content. The user account system uses <strong>PHP</strong> to connect to <strong>MySQL databases</strong>.</p>

						</div>
					</section>

					<!-- Screenshots -->
					<section id="screenshots" class="three">
						<div class="container">

							<header>
								<h2>Screenshots</h2>
							</header>

							<div class="row">
								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-twib-1.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-twib-2.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u$ 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-twib-3.jpg" alt="" /></a>
									</article>
								</div>
							</div>

						</div>
					</section>

			</div>

		<!-- Footer -->
			<div id="footer">

				<!-- Copyright -->
					<ul class="copyright">
						<li>&copy; 2015 Jon Reimer</li>
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
