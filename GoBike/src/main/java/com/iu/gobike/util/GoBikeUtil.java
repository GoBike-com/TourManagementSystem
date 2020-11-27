package com.iu.gobike.util;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

/**
 * @author jbhushan
 */
public class GoBikeUtil {

    public static String generateRandomNumber(int from, int to) {
        return Integer.toString(new Random().nextInt(to - from) + from);
    }

    public static Instant convert(String date) throws java.text.ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdf.parse(date);
        return d.toInstant();
    }

    public static Date convertDate(String date) throws java.text.ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date d = sdf.parse(date);
        return d;
    }

    public static LocalTime convertTime(String time) throws java.text.ParseException {
        DateFormat displayFormat = new SimpleDateFormat("HH:mm");
        DateFormat parseFormat = new SimpleDateFormat("hh:mm a");
        Date date = parseFormat.parse(time);
        System.out.println(parseFormat.format(date) + " = " + displayFormat.format(date));
        return LocalTime.parse(displayFormat.format(date));
    }

    public static Map<String, String> getPostBodyInAMap(HttpServletRequest request) {
        Map<String, String> postBody = new HashMap<>();
        try {
            populatePostBody(postBody, request.getReader().lines().collect(Collectors.joining()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return postBody;
    }

    private static void populatePostBody(Map<String, String> parameterMap, String body) {
        try {
            JSONObject userDetails = (JSONObject) new JSONParser().parse(body);
            for(Object key: userDetails.keySet()) {
                parameterMap.put((String)key, (String)userDetails.get(key));
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
