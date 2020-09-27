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
    private Long phone;

    @Column
    private String email;

    @Column
    private int securityQuestion;

    @Column
    private String securityAnswer;

}
