package com.iu.gobike.util;

import java.util.Random;

/**
 * @author jbhushan
 */
public class GoBikeUtil {

    public static String generateRandomNumber(int from, int to) {
        return Integer.toString(new Random().nextInt(to - from) + from);
    }
}
