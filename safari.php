<!DOCTYPE HTML>
<?php include "requireSSL.php" ?>
<html>
	<head>
		<title>Portfolio | Secondhand Safari</title>
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
					<section id="top" class="one dark cover safari">
						<div class="container">

							<header>
								<h2 class="alt">Secondhand Safari</h2>
								<p>Photographs &amp; gallery experiments</p>
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

							<p>Some days, you just really feel like playing with jQuery plugins. Or maybe that's just me... <strong>Secondhand Safari</strong> is a very simple website which merely exists to showcase my photography. I'm sure I'll make an official photography portfolio one of these days, but for now I just toss them online now and then.</p>
							<p><a href='
//voidlike.com/amnesiadust/school/secondhandsafari/'>Click here for the O.G.</a> (Original Gallery, not Gangster)</p>
							<p>However, that minuscule collection of photographs and jQuery plugins was not enough to satisfy me. Additionally, many of my friends continually pester me about the slow pace with which I upload my thousands of photos. So I came to the conclusion that I would like a place to dump all of my raw photos immediately after taking them. The result is a remake of <strong>Secondhand Safari</strong> with thousands of photo thumbnails.</p>
							<p>Why not check out <a href="
//voidlike.com/secondhand-safari/">the new, unoptimized version here</a>?</p>

							<h3>Technologies</h3>
							<p>The original site was mostly done as a just-for-fun Frankensteining of <strong>jQuery</strong> image plugins; the <strong>CSS/HTML</strong> is rather boring and minimal. A few of the plugins include <strong><a href="
//masonry.desandro.com/">Masonry</a></strong>, <strong><a href="
//tympanus.net/codrops/2009/11/23/jcapslide-a-jquery-image-caption-plugin/">CapSlide</a></strong>, and <strong><a href="
//demos.flesler.com/jquery/scrollTo/">ScrollTo</a></strong>, modified to suite my needs.</p>
							<p>The new site uses these same technologies, but gets a lot more complicated. I wanted the site to be ruthlessly efficient, so I couldn't be ruthlessly lazy. All I have to do is drop a folder of images into the directory and the website takes care of the rest. <strong>PHP</strong> was heavily used to recursively generating the image blocks, and this was also one of the first times I developed a site using <strong>Jade</strong> and <strong>Sass</strong>. This way I only had to type a few hundred lines of code instead of tens of thousands.</p>

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
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-safari-photo.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-safari-old.jpg" alt="" /></a>
									</article>
								</div>

								<div class="4u$ 12u$(mobile)">
									<article class="item">
										<a href="javascript:void(0)" class="image fit"><img src="images/sc-safari-photo2.jpg" alt="" /></a>
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
