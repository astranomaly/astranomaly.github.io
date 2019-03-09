<!DOCTYPE HTML>
<?php include "requireSSL.php" ?>
<html>
	<head>
		<title>Portfolio | Mineshaft Mishap</title>
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
					<section id="top" class="one dark cover mine">
						<div class="container">

							<header>
								<h2 class="alt">Mineshaft Mishap</h2>
								<p>A textless text-adventure game...</p>
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

							<p>Text adventure games, despite their graphic-free nature, paved the way for the image-heavy computer games of today. A game based only on written words seems quite minimal by modern standards... but what if you remove the text from a text adventure altogether? You end up with a game told only through sound...</p>
							<p><strong>Mineshaft Mishap</strong> is a vast "audio adventure" that my classmates and I conceptualized. We've all since gone our seperate ways, but "Chapter 1" (of 5) was mostly completed, and the game engine is finished. We have all the pieces, they just need to be polished and put together. Perhaps it will one day rise from the dead.</p>
							<p>The story spans numerous chapters and genres, and follows a group of children who find themselves in an abandoned theme park. The game is full of mystery, horror, and survival elements, and is meant to feel like an interactive audio book.</p>
							<p>My role in this game's creation had a lot to do with coding the game engine's database interactions and creating the maps, though we all did a bit of everything by the end of the course. All of us worked together to conceptualize the game mechanics and plot, as well as writing the stories and puzzles.</p>
							<p><a href='
//anissacoelho.com/mineshaftmishap/promo/index.html'>Click here to see the promo</a> (by <a href="
//anissacoelho.com/">Anissa Coelho</a>) or <a href='
//voidlike.com/mineshaftmishap/'>here to play a basic proof-of-concept</a></p>

							<h3>Technologies</h3>
							<p>We decided to use <strong>jQuery</strong> instead of Flash to program the game's interactivity. <strong>PHP</strong>, <strong>AJAX/JSON</strong>, and <strong>MySQL</strong> are all very important components of the game engine we made. <a href="
//ca.linkedin.com/pub/john-sagris/24/23a/a06">John Sagris</a> was kind enough to provide his voice as the narrator (despite the story's absurd script length).</p>

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
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-mineshaft-demo.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-mineshaft-map.jpg" alt="" /></a>
									</article>
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-mineshaft-map2.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u$ 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-mineshaft-demo2.jpg" alt="" /></a>
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
