ScoreOption = {
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
				min : 300,
				max : 900,
				type : 'gauge',
				detail : {
					formatter : '{value}分'
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

			$("#owl-demo").owlCarousel({

						navigation : true, // Show next and prev
						// buttons
						slideSpeed : 300,
						paginationSpeed : 400,
						singleItem : true

					});
		})