package com.iu.gobike.model;

import lombok.*;

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
public class Flight {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "BOOKING_NUMBER")
    private Long bookingNumber;

    @OneToOne
    private Travel travel;

    @Column(name = "TRAVEL_CLASS")
    private String travelClass;

    @Column(name = "DURATION")
    private String duration;

    @Column(name = "AIRLINE")
    private String airline;

    @Column(name = "ARRIVAL_TERMINAL")
    private String arrivalTerminal;

    @Column(name = "DEPT_TERMINAL")
    private String deptTerminal;

    @Column(name = "ARRIVAL_CODE")
    private String arrivalIataCode;

    @Column(name = "DEPT_CODE")
    private String deptIataCode;

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
