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
 *  2015-3-23 Created by 罗科勤
 */
package data.search;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 * @author 罗科勤
 */
public class FindYou {

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(
                new FileReader(new File("D:/ardata/shenfenzheng/shengfenzheng1.csv")));
        BufferedWriter writer = new BufferedWriter(
                new FileWriter(new File("D:/ardata/shenfenzheng/result.csv")));
        String line = null;
        while ((line = reader.readLine()) != null) {
            String[] temp = line.split(",");
            if (temp.length > 5) {
                // 姓名
                String name = temp[0];
                // 身份证
                String id = temp[4];
                // 性别
                //String sex = temp[5];
                // 生日
                //String birthday = temp[6];
                // 手机号
                // String mobile = temp[19];
                System.out.println(line);
                System.out.println(new String(name.getBytes("utf8")));
                writer.write(line);
                if (name.equals("刘格") && id.contains("1989")) {
                    System.out.println(line);
                }
                return;
            }
        }
        writer.flush();
        writer.close();
        reader.close();
    }
}
