package com.iu.gobike.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Blob;
import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table
public class Travel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "BOOKING_NUMBER")
    private Long bookingNumber;

    @JoinColumn(name = "USER")
    @ManyToOne
    private User user;

    @Column(name = "TRAVEL_DATE")
    @NonNull
    private Instant travelDate;

    @Column(name="CREATED_DATE", updatable = false)
    @CreatedDate
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    @LastModifiedDate
    private Instant lastModifiedDate;

    @Column(name="CREATED_BY")
    private String createdBy;

    @Column(name="MODIFIED_BY")
    private String modifiedBy;

    @Column(name="E_TICKET")
    private Blob eTicket;

}
