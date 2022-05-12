package by.bsuir.app.service.impl;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.Assert.*;

public class MailSenderTest {


    @Test
    public void testSendMessageShouldSend() {
        SimpleMailMessage smm = new SimpleMailMessage();
        smm.setFrom(null);
        smm.setTo("");
        smm.setSubject("");
        smm.setText("");

        Mockito.doNothing().when(javaMailSender).send(smm);
        mailSender.send("", "","");
        Mockito.verify(javaMailSender, Mockito.times(1)).send(smm);
    }
}