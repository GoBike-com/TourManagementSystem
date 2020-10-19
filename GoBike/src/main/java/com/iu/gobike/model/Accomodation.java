package com.iu.gobike.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table
public class Accomodation {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "BOOKING_NUMBER")
    private Long bookingNumber;

    @JoinColumn(name = "USER")
    @ManyToOne
    private User user;

    @Column(name = "CHECK_IN")
    @NonNull
    private Instant checkIn;

    @Column(name = "CHECK_OUT")
    @NonNull
    private Instant checkOut;

    @Column(name = "Amount")
    private Integer amount;

    @Column(name="CREATED_DATE", updatable = false)
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    private Instant lastModifiedDate;

    @Column(name="CREATED_BY")
    private String createdBy;

    @Column(name="MODIFIED_BY")
    private String modifiedBy;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
        this.lastModifiedDate = Instant.now();
    }

}
