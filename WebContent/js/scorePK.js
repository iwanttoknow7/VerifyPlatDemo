$(function() {
	$.getJSON("score/getScorePK", function(data) {
				$("#img1").attr("src",data.person1.src);
				$("#departSmall1").text(data.person1.department);
				$("#roomSmall1").text(data.person1.room);
				$("#name1").text(data.person1.name);
				
				$("#img2").attr("src",data.person2.src);
				$("#departSmall2").text(data.person2.department);
				$("#roomSmall2").text(data.person2.room);
				$("#name2").text(data.person2.name);
			});

	})