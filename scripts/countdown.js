//update countdown timer every 1000 milliseconds
function startcountdown() {
	returntime2 = getcountdown();
	var timer = document.getElementById("countdown");
	var daysSpan = timer.querySelector('.days');
	var hoursSpan = timer.querySelector('.hours');
	var minutesSpan = timer.querySelector('.minutes');
	var secondsSpan = timer.querySelector('.seconds');
	var interval = setInterval(function(){
		var t = countdown();
		daysSpan.innerHTML = ('0' + t.days).slice(-2);
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		//display 00 if time is negative
		if(t.total<=0){
			clearInterval(interval);
			daysSpan.innerHTML = ('00');
			hoursSpan.innerHTML = ('00');
			minutesSpan.innerHTML = ('00');
			secondsSpan.innerHTML = ('00');
		}
	},1000);
}

//get time until next scheduled launch from server
function getcountdown() {
	var returntime;
	var xmlhttp2 = new XMLHttpRequest();
	var url2 = "https://launchlibrary.net/1.2/launch/next/1"
	xmlhttp2.onreadystatechange = function(){
		if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200){
			var obj2 = JSON.parse(xmlhttp2.responseText);
				if (obj2.launches[0].tbdtime == 0) {
					returntime = obj2.launches[0].netstamp;
				}
				if (obj2.launches[0].tbdtime == 1) {
					returntime = 0;
					document.getElementById("countdown_warning").innerHTML = "Next launch has no scheduled time!";
				}
		}
	};
	xmlhttp2.open("GET", url2, false);
	xmlhttp2.send();
	return returntime;
}

//calculate remaining time
function countdown(){
	var end = timeConverter(returntime2);
	//UNIX not needed
	var t = Date.parse(end) - Date.parse(new Date());
	var s = Math.floor( (t/1000) % 60 );
	var m = Math.floor( (t/1000/60) % 60);
	var h = Math.floor( (t/(1000*60*60)) % 24 );
	var d = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': d,
		'hours': h,
		'minutes': m,
		'seconds': s
	};
}	

//convert UNIX time stamp to JS date object
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}