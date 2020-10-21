package com.iu.gobike.service;

import com.iu.gobike.util.GoBikeUtil;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class MailService {

	public static void sendMail(String toMail, String subject, String body) {
        Properties prop = new Properties();
        prop.put("mail.store.protocol", "imap");
        prop.put("mail.imap.ssl.enable", String.valueOf(true));
        prop.put("mail.imap.port", String.valueOf(993));
        prop.put("mail.debug.auth", String.valueOf(false));
        prop.put("mail.maiimap.auth.plain.disable", String.valueOf(true));
        prop.put("mail.imap.auth.ntlm.disable", String.valueOf(true));
        prop.put("mail.smtp.host", "smtp.gmail.com");

//        prop.put("mail.smtp.auth", true);
//        prop.put("mail.smtp.starttls.enable", "true");
//        prop.put("mail.smtp.host", "smtp.gmail.com");
//        prop.put("mail.smtp.port", "587");
//        prop.put("mail.smtp.ssl.trust", "smtp.mailtrap.io");

        String USER_NAME = "service.gobike4321";
        String PASSWORD = "gobike999";

        Properties props = System.getProperties();
        String host = "smtp.gmail.com";
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.user", USER_NAME);
        props.put("mail.smtp.password", PASSWORD);
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props);

       // Session session = Session.getInstance(prop);

        try {
          //  Session session = Session.getDefaultInstance(prop);
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("service.gobike4321"));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toMail));
            message.setSubject(subject);
            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(bodyForOtp(body), "text/html");
            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);
            message.setContent(multipart);
//            Transport transport = session.getTransport("smtp");
//            transport.connect(host, "contact.gobike999", "gobike999");
//            transport.sendMessage(message, message.getAllRecipients());
//            System.out.println("email sent");
           // transport.close();
           // Transport.send(message);
            Transport transport = session.getTransport("smtp");
            transport.connect(host, USER_NAME, PASSWORD);
            transport.sendMessage(message, message.getAllRecipients());
            System.out.println("email sent");
            transport.close();
        }
        catch (AddressException ae) {
            ae.printStackTrace();
        }
        catch (MessagingException me) {
            me.printStackTrace();
        }
    }

    private static String bodyForOtp(String otp) {
        return "<h1><i>" + "GobikeSupport" + "<i></h1>\n\n" +
                "<p><i> Here is your login OTP, please do not share</p>\n"
                + "<p>" + "your one time password is " + otp+ "</p>\n";
    }
}
