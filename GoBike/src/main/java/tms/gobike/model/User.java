package tms.gobike.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Builder
@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String userName;

    @Column
    private String password;

    @Column
    private String phone;

    @Column
    private String email;

    @Column
    private int securityQuestionID;

    @Column
    private String securityQuestionAnswer;

    public User(String name, String city, String state, String userName, String password, String phone, String email, int securityQuestionID, String securityQuestionAnswer) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.userName = userName;
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.securityQuestionID = securityQuestionID;
        this.securityQuestionAnswer = securityQuestionAnswer;
    }
}
