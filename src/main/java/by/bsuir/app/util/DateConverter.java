package by.bsuir.app.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

public class DateConverter {

    private final static String BY_DATE_FORMAT = "dd-MM-yyyy";

    public String convertToNewDateFormatString(Date date) {
        DateFormat dateFormat = new SimpleDateFormat(BY_DATE_FORMAT);
       return dateFormat.format(date);
    }
}
