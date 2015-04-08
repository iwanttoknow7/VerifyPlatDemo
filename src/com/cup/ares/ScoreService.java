/*
 *  Copyright 2003, China Union Pay Co., Ltd.  All right reserved.
 *
 *  THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF CHINA UNION PAY CO.,
 *  LTD.  THE CONTENTS OF THIS FILE MAY NOT BE DISCLOSED TO THIRD
 *  PARTIES, COPIED OR DUPLICATED IN ANY FORM, IN WHOLE OR IN PART,
 *  WITHOUT THE PRIOR WRITTEN PERMISSION OF CHINA UNION PAY CO., LTD
 *
 *  Module Name:  $Id:$
 *
 *  Edit History:
 *
 *  2015-4-2 Created by 罗科勤
 */
package com.cup.ares;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author 罗科勤
 */
@Controller
@RequestMapping("/pages/score")
public class ScoreService {

    /**
     * <p>
     * 根据手机号获取用户评分结果
     * </p>
     */
    @RequestMapping(value = "/getScoreByMobile/{mobileNo}")
    @ResponseBody
    public String getScoreByMobile(@PathVariable("mobileNo")
    String mobileNo) {
        JSONObject json = new JSONObject();
        json.put("score", 675);
        JSONArray array = new JSONArray();
        array.add(176);
        array.add(135);
        array.add(240);
        array.add(180);
        array.add(150);
        json.put("dimData", array);
        return json.toString();
    }

    /**
     * 任意获取两个人
     */
    @RequestMapping(value = "/getScorePK")
    @ResponseBody
    public String getScorePK() {
        JSONObject json = new JSONObject();
        JSONObject person1 = new JSONObject();
        person1.put("name", "邹勇");
        person1.put("department", "技术开发中心");
        person1.put("room", "安全风控室");
        person1.put("src", "../jpg/邹勇.jpg");
        json.put("person1", person1);
        JSONObject person2 = new JSONObject();
        person2.put("name", "陆堃彪");
        person2.put("department", "技术开发中心");
        person2.put("room", "安全风控室");
        person2.put("src", "../jpg/陆堃彪.jpg");
        json.put("person2", person2);
        return json.toString();
    }

    /**
     * 任意获取两个人
     */
    @RequestMapping(value = "/valueScore/{mobileNo1}/{mobileNo2}")
    @ResponseBody
    public String valueScore() {
        String mobileNo1 = "";
        String mobileNo2 = "";
        Double score1 = 645.0;
        Double score2 = 685.0;
        JSONObject json = new JSONObject();
        json.put("dlt", getScoreDlt(score1, score2));
        return json.toString();
    }

    /**
     * 获取由高到低分差最大的值
     * @param score1 分值1
     * @param score2 分值2
     * @return
     */
    public String getScoreDlt(Double score1, Double score2) {
        Double result = 0.0;
        String temp;
        if (score1 >= score2) {
            result = score1 - score2;
            temp = "高";
        } else {
            result = score2 - score1;
            temp = "低";
        }
        String resultStr = "";
        if (result >= 100) {
            resultStr = result.toString().substring(0, 1) + "00多分";
        } else if (result >= 10) {
            resultStr = result.toString().substring(0, 1) + "0多分";
        } else if (result >= 0) {
            resultStr = "几分";
        }
        return temp + resultStr;
    }
}
