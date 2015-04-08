var cardNo="62148502";
/**
 * 通过卡号获取问题列表 查询加载问题
 */
function getQuestionsByCardNo() {
	cardNo = $.trim($("#cardNo").val());

	var questionsData = {
		"id" : "000000000001",
		"cardNo" : cardNo,
		"data" : // 题目
		{
			"questionList" : [{
						"questionId" : "01",
						"questionDesc" : "最近一次的交易金额是多少",
						"answer" : "A 200,B 300,C 400"
					}, {
						"questionId" : "02",
						"questionDesc" : "最近一次的消费地点",
						"answer" : "A 北京,B 上海,C 深圳"
					}, {
						"questionId" : "03",
						"questionDesc" : "最近一次的消费的商户名称",
						"answer" : "A 万达百货,B 百联又一城,C 正大广场"
					}]
		}
	};
	$.post("http://172.17.250.37:9089/Auth/getAuthQuestions", {
				"cardNo" : cardNo
			}, function(data) {
				questionsData = data;
			}, "json");
	// 加载问题
	$("#questionList>li:eq(0)").text("问题一："
			+ questionsData.data.questionList[0].questionDesc);
	$("#optionsRadios11").parent()
			.append(questionsData.data.questionList[0].answer.split(",")[0]);
	$("#optionsRadios12").parent()
			.append(questionsData.data.questionList[0].answer.split(",")[1]);
	$("#optionsRadios13").parent()
			.append(questionsData.data.questionList[0].answer.split(",")[2]);

	$("#questionList>li:eq(2)").text("问题二："
			+ questionsData.data.questionList[1].questionDesc);
	$("#optionsRadios21").parent()
			.append(questionsData.data.questionList[1].answer.split(",")[0]);
	$("#optionsRadios22").parent()
			.append(questionsData.data.questionList[1].answer.split(",")[1]);
	$("#optionsRadios23").parent()
			.append(questionsData.data.questionList[1].answer.split(",")[2]);

	$("#questionList>li:eq(4)").text("问题三："
			+ questionsData.data.questionList[2].questionDesc);
	$("#optionsRadios31").parent()
			.append(questionsData.data.questionList[2].answer.split(",")[0]);
	$("#optionsRadios32").parent()
			.append(questionsData.data.questionList[2].answer.split(",")[1]);
	$("#optionsRadios33").parent()
			.append(questionsData.data.questionList[2].answer.split(",")[2]);
}

/**
 * 通过问题，提交答案到服务端，获取返回结果
 */
function verifyByQuestions() {
	$.post("http://172.17.250.37:9089/Auth/getAuthAnswer", {
		"id" : "000000000001",
		"cardNo" : cardNo,
		"data" : JSON.stringify({
					"answerList" : [{
						"questionId" : "01",
						"answer" : $('input[name="optionsRadiosinline1"]:checked')
								.val()
					}, {
						"questionId" : "02",
						"answer" : $('input[name="optionsRadiosinline2"]:checked')
								.val()
					}, {
						"questionId" : "03",
						"answer" : $('input[name="optionsRadiosinline3"]:checked')
								.val()
					}]
				})
	}, function(data) {
		if (data.result == '00') {
			alert("验证通过");
		} else {
			alert("验证不通过");
		}
	}, "json");

}

/**
 * 通过问题，提交答案到服务端，获取返回结果
 */
function getEqaulResult() {
	$.post("http://172.17.250.37:9089/Grade/getCardGrade", {
				"cardNo" : cardNo
			}, function(data) {
				alert(data.score);
			}, "json");

}
