$(function(){
	
	var note = $('#note'),
		ts = new Date(2014, 8, 25);

//	var logo = $('#logo');
//	logo.html('<img src="assets/img/rose_icon.png"/>');
//	logo.html("messageasdfasdf<br />");

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
//			var message = "";
//
//			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
//			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
//			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
//			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
//
//			if(newYear){
//				message += "left until the new year!";
//			}
//			else {
//				message += "left to 10 days from now!";
//			}

//			note.html(message);
		}
	});
	
});
