package com.iu.gobike.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "CITY")
    private String city;

    @Column(name = "STATE")
    private String state;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name ="PASSWORD")
    private String password;

    @Column(name = "PHONE")
    private Long phone;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SECURITY_QUESTION")
    private int securityQuestionId;

    @Column(name = "SECURITY_ANSWER")
    private String securityQuestionAnswer;

    @Column(name="CREATED_DATE", updatable = false)
    @CreatedDate
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    @LastModifiedDate
    private Instant lastModifiedDate;

}
