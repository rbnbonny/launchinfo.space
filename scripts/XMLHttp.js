//XMLHttpReqeust to get data from server
var xmlhttp1 = new XMLHttpRequest();
var url1 = "https://launchlibrary.net/1.2/launch/next/1024"
xmlhttp1.onreadystatechange = function(){
	if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200){
		obj = JSON.parse(xmlhttp1.responseText);

		var date1 = [];
		var date2 = [];
		var stream = [];
		var tbdt = [];
		var tbdd = [];
		var tminus = [];
		var window_s = [];
		var window_e = [];
		var window = [];
		
		var count_scheduled = 0;
		var count_unscheduled = 0;
		
		//run loop for total number of launches
		for (i = 0; i <= obj.total; i++) {
			
			//set arrays
			stream[i] = obj.launches[i].vidURLs[0];
			tbdt[i] = obj.launches[i].tbdtime;
			tbdd[i] = obj.launches[i].tbddate;
			tminus[i] = obj.launches[i].net;
			window_s[i] = obj.launches[i].windowstart;
			window_e[i] = obj.launches[i].windowend;
			
			//conver ISO time string into readable format
			date1[i] = String(obj.launches[i].isonet);
			var dc1 = date1[i].slice(0,4);
			var dc2 = date1[i].slice(4,6);
			var dc3 = date1[i].slice(6,11);
			var dc4 = date1[i].slice(11,13);
			var dc5 = date1[i].slice(13);
			var dd1 = "-";
			var dd2 = ":";
			var resultd1 = dc1 + dd1 + dc2 + dd1 + dc3 + dd2 + dc4 + dd2 + dc5;
			date2[i] = new Date(resultd1).toDateString();
			
			{
				//check if link is available
				if (stream[i] == undefined){
					stream[i] = "<span>No link available</span>";
				}
				else{
					stream[i] = "<a href='" + stream[i] + "'>" + stream[i] + "</a>";
				}							
				
				//check if time is certain
				if (tbdt[i] == 1){
					tminus[i] = "TBD";
					window[i] = "TBD";
				}
				
				//check if date is certain
				if (tbdd[i] == 1){
					date2[i] = "To be determined";
					tminus[i] = "TBD";
					window[i] = "TBD";
					
				}

				//check if launch window is instantaneous
				if (window[i]!="TBD"){
					if (String(window_s[i]) === String(window_e[i])){
						window[i] = "instantaneous";
					}
					else{
					window[i] = window_s[i] + " " + "-" + " " + window_e[i];
					}
				}
				
				//displays data from arrays in HTML div for scheduled launches
				if (tbdd[i] == 0){
					count_scheduled++;
					document.getElementById("scheduled_c").innerHTML += "<div class='w3-round w3-margin w3-container w3-card-8 w3-theme'><h3>" + date2[i] + "</h3>" +
					"<h2>" + obj.launches[i].name + "</h2>" +
					"<div class='w3-round w3-margin-8 w3-container w3-theme-l2'>" +
					"<div class='w3-padding-8 w3-col l10 m6 s12'>" +
					"<span><b>Launch Site</b></span><br>" +
					"<span>" + obj.launches[i].location.pads[0].name + " </span><a href='https://www.google.com/maps/place/" + obj.launches[i].location.pads[0].latitude + "," + obj.launches[i].location.pads[0].longitude + "/@" + obj.launches[i].location.pads[0].latitude + "," + obj.launches[i].location.pads[0].longitude + ",6z' target='_blank'><img border='0' alt='Map' src='map.svg' title='Show in Google Maps' width='20' height='20'></a><br>" +
					"<span><b>Live Stream</b></span><br>" + stream[i] + "<br>" +
					"<span><b>Current T-0</b></span><br>" +
					"<span>" + tminus[i] + "</span><br>" +
					"<span><b>Launch Window</b></span><br>" +
					"<span>" + window[i] + "</span><br></div>" +
					"</div></div>";
				}
				
				//display data from array in HTML div for unscheduled launches
				if (tbdd[i] == 1){
					count_unscheduled++;
					document.getElementById("unscheduled_c").innerHTML += "<div class='w3-round w3-margin w3-container w3-card-8 w3-theme'><h3>" + date2[i] + "</h3>" +
					"<h2>" + obj.launches[i].name + "</h2>" +
					"<div class='w3-round w3-margin-8 w3-container w3-theme-l2'>" +
					"<div class='w3-padding-8 w3-col l10 m6 s12'>" +
					"<span><b>Launch Site</b></span><br>" +
					"<span>" + obj.launches[i].location.pads[0].name + " </span><a href='https://www.google.com/maps/place/" + obj.launches[i].location.pads[0].latitude + "," + obj.launches[i].location.pads[0].longitude + "/@" + obj.launches[i].location.pads[0].latitude + "," + obj.launches[i].location.pads[0].longitude + ",6z' target='_blank'><img border='0' alt='Map' src='map.svg' title='Show in Google Maps' width='20' height='20'></a><br>" +
					"<span><b>Live Stream</b></span><br>" + stream[i] + "<br>" +
					"<span><b>Current T-0</b></span><br>" +
					"<span>" + tminus[i] + "</span><br>" +
					"<span><b>Launch Window</b></span><br>" +
					"<span>" + window[i] + "</span><br></div>" +
					"</div></div>";
				}
				
				//display number of scheduled and unscheduled launches
				document.getElementById("scheduled_entries").innerHTML = count_scheduled;
				document.getElementById("unscheduled_entries").innerHTML = count_unscheduled;
			}
		}
	}
};
xmlhttp1.open("GET", url1, true);
xmlhttp1.send();