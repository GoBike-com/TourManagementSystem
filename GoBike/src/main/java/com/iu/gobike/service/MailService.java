package com.iu.gobike.service;

import com.iu.gobike.util.GoBikeUtil;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class MailService {

	public static void sendMail(String toMail, String subject, String body) {
        Properties prop = new Properties();
        prop.put("mail.smtp.auth", true);
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.host", "smtp.mailtrap.io");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.ssl.trust", "smtp.mailtrap.io");

        Session session = Session.getInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("contact.gobike999@gmail.com", "gobike999");
            }
        });

//        String host = "localhost";
//        Properties properties = System.getProperties();
//        properties.setProperty("mail.smtp.host", host);
//        Session session = Session.getDefaultInstance(properties);
      //  String host = "smtp.gmail.com";
     //   prop.put("mail.smtp.auth", "true");
    ///    prop.put("mail.smtp.starttls.enable", "true");
      //  prop.put("mail.smtp.host", host);
     //   prop.put("mail.smtp.port", "25");
     //   prop.put("mail.smtp.ssl.trust", "smtp.mailtrap.io");
      //  prop.put("mail.smtp.user", "contact.gobike999");
      //  prop.put("mail.smtp.password", "gobike999");

        try {
          //  Session session = Session.getDefaultInstance(prop);
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("contact.gobike999@gmail.com"));
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
            Transport.send(message);
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
