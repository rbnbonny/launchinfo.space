//start UTC clock
function startTime() {
	var today = new Date();
	var d = today.getUTCDate();
	var mo = today.getUTCMonth() + 1;
	var y = today.getUTCFullYear();
	var h = today.getUTCHours();
	var m = today.getUTCMinutes();
	var s = today.getUTCSeconds();
	d = checkTime(d)
	mo = checkTime(mo)
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('date').innerHTML =
	d + "." + mo + "." + y;
	document.getElementById('time').innerHTML =
	h + ":" + m + ":" + s + " " + "UTC";
	var t = setTimeout(startTime, 1000);
}

//add leading zeros to UTC clock
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
