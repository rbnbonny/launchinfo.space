<!DOCTYPE HTML>
<html>
	
	<?php include 'assets/meta.html';?>
	
	<script src="scripts/GoogleAnalytics.js"></script>
	<script src="scripts/UTCclock.js"></script>
	
	<?php include 'assets/header.html';?>
	
	<body onload="startTime(); startcountdown();">
		
		<!--Countdown Timer-->
		<div class="w3-container w3-padding-16" style="width:375px;text-align:center">
			<div id="countdown" class="w3-round w3-padding-8 w3-container w3-card-8 w3-theme-l2 w3-center">
				<h3>Countdown to next launch</h3>
				<div class="w3-padding-tiny">
					<span class="days w3-round-large w3-padding w3-card-4 w3-theme-d1 w3-xlarge"></span>
					<div class="w3-padding-8">Days</div>
				</div>
				<div class="w3-padding-tiny">
					<span class="hours w3-round-large w3-padding w3-card-4 w3-theme-d1 w3-xlarge"></span>
					<div class="w3-padding-8">Hours</div>
				</div>
				<div class="w3-padding-tiny">
					<span class="minutes w3-round-large w3-padding w3-card-4 w3-theme-d1 w3-xlarge"></span>
					<div class="w3-padding-8">Minutes</div>
				</div>
				<div class="w3-padding-tiny">
					<span class="seconds w3-round-large w3-padding w3-card-4 w3-theme-d1 w3-xlarge"></span>
					<div class="w3-padding-8">Seconds</div>
				</div>
				<div id="countdown_warning" style="font-weight:bold;"></div>
			</div>
		</div>
		
		<!--mobile anchor link-->
		<div class="w3-center w3-hide-large w3-hide-medium w3-large">
			<a href="#unscheduled">Jump to unscheduled launches</a>
		</div>
		
		<!--Launches-->
		<div class="w3-container w3-animate-bottom">
			<div class="w3-leftbar w3-col l6 m6 s12 w3-border-dark">
				<div class="w3-margin-right">
					<h1 class="w3-padding-left">Scheduled Launches <span class="w3-xlarge w3-badge w3-theme" id="scheduled_entries"></h1>
					<div id="scheduled_c" style="word-wrap: break-word;"></div>
				</div>
			</div>					
			<div class="w3-leftbar w3-col l6 m6 s12 w3-border-dark">
				<div class="w3-margin-right">
					<a name="unscheduled">
					<h1 class="w3-padding-left">Unscheduled Launches <span class="w3-xlarge w3-badge w3-theme" id="unscheduled_entries"></h1>
					<div id="unscheduled_c" style="word-wrap: break-word;"></div>
				</div>
			</div>
		</div>
	
		<script src="scripts/XMLHttp.js"></script>
		<script src="scripts/countdown.js"></script>

	</body>
	
	<?php include 'assets/footer.html';?>
	
</html>