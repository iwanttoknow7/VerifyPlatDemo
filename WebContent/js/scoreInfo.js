ScoreOption = {
	title : {
		x : "center",
		y : "bottom",
		text : "400到600分是不合格；600到800是良好，800到900是优秀",
		textStyle : {
			fontSize : 14
		}

	},
	tooltip : {
		formatter : "{a} <br/>{b} : {c}%"
	},
	toolbox : {
		show : false,
		feature : {
			mark : {
				show : true
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	series : [{
				name : '西瓜信用',
				min : 400,
				max : 900,
				type : 'gauge',
				detail : {
					formatter : '{value}分'
				},
				axisLine : {
					show : true,
					lineStyle : {
						color : [[0.4, '#ff4500'], [0.8, '#48b'],
								[1, '#228b22']],
						width : 30
					}
				},
				data : [{
							value : 675,
							name : '西瓜分'
						}]
			}]
}

dimOption = {
	title : {
		show : false,
		text : '西瓜信用',
		subtext : '纯属虚构'
	},
	tooltip : {
		trigger : 'axis'
	},
	legend : {
		show : false,
		orient : 'vertical',
		x : 'center',
		data : ['维度评分']
	},
	toolbox : {
		show : false
	},
	polar : [{
				radius : 125,
				indicator : [{
							text : '身份特质',
							axisLabel : {
								show : true,
								formatter : null,
								textStyle : {
									color : 'auto',
									fontWeight : 'bold'
								}
							},
							max : 240
						}, {
							text : '消费偏好',
							axisLabel : {
								show : true,
								formatter : null,
								textStyle : {
									color : 'auto',
									fontWeight : 'bold'
								}
							},
							max : 240
						}, {
							text : '履约能力',
							axisLabel : {
								show : true,
								formatter : null,
								textStyle : {
									color : 'auto',
									fontWeight : 'bold'
								}
							},
							max : 240
						}, {
							text : '人脉关系',
							axisLabel : {
								show : true,
								formatter : null,
								textStyle : {
									color : 'auto',
									fontWeight : 'bold'
								}
							},
							max : 240
						}, {
							text : '不良记录',
							axisLabel : {
								show : true,
								formatter : null,
								textStyle : {
									color : 'auto',
									fontWeight : 'bold'
								}
							},
							max : 240
						}]
			}],
	calculable : true,
	series : [{
				name : '维度评分',
				type : 'radar',
				data : [{
							value : [176, 135, 240, 180, 150],
							name : '维度评分'
						}]
			}]
};
$(function() {
	$('#myCarousel').carousel({
		interval : false
			// in milliseconds
		});
	$.getJSON("score/getScoreByMobile/18217515170", function(data) {
				dimOption.series[0].data[0].value = data.dimData;
				ScoreOption.series[0].data[0].value = data.score;
				var scoreChart = echarts.init(document
						.getElementById('scoreChart'));
				scoreChart.setOption(ScoreOption);

				$('#myCarousel').on('slid.bs.carousel', function() {
					if ($("#dimChart").parent().hasClass("active")) {
						scoreChart.dispose();
						dimChart = echarts.init(document
								.getElementById('dimChart'));
						dimChart.setOption(dimOption);
					}
					if ($("#scoreChart").parent().hasClass("active")) {
						dimChart.dispose();
						scoreChart = echarts.init(document
								.getElementById('scoreChart'));
						scoreChart.setOption(ScoreOption);
					}
				})
			});
		// 获取chart对象
	})