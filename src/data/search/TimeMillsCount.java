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
 *  2015-3-30 Created by 罗科勤
 */
package data.search;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author 罗科勤
 */
public class TimeMillsCount {

    public static void  main(String[] args) throws ParseException{
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date startD = sdf.parse("2015-03-29 13:40:15");
        Date endD = sdf.parse("2015-03-30 08:20:11");
        System.out.println("start:"+startD.getTime()+"|end:"+endD.getTime());
    }
}
