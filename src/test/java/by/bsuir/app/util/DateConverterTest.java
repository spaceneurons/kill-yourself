package by.bsuir.app.util;


import org.junit.Assert;
import org.junit.Test;

import java.lang.constant.Constable;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DateConverterTest {

    private final static String DATE_FORMAT = "\\d{2}-\\d{2}-\\d{4}";
    private final static String INCORRECT_DATE_FORMAT = "\\d{2}-\\d{2}-\\d{4}";

    private final DateConverter dateConverter = new DateConverter();

    @Test
    public void testConvertToNewDateFormatStringShouldConvertToSpecialFormat() {
        String date = dateConverter.convertToNewDateFormatString(new Date());
        Pattern pattern = Pattern.compile(DATE_FORMAT);
        Matcher matcher = pattern.matcher(date);
        Assert.assertTrue(matcher.matches());
    }

    @Test
    public void testConvertToNewDateFormatStringShouldNotConvertToSpecialFormat() {
        String date = dateConverter.convertToNewDateFormatString(new Date());
        Pattern pattern = Pattern.compile(INCORRECT_DATE_FORMAT);
        Matcher matcher = pattern.matcher(date);
        Assert.assertTrue(matcher.matches());
    }
}