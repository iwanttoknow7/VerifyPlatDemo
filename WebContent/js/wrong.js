$(function() {
			$.getJSON("score/valueScore/18217515170/13505844198",
					function(data) {
						$("#wrongtext").text("猜错了，邹勇比陆堃彪"+data.dlt);
					});

		})