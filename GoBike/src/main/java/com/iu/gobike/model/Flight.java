package com.iu.gobike.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iu.gobike.enums.FlightType;
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

    @ManyToOne
    @JoinColumn(name = "USER_ITINERARY")
    @JsonIgnore
    private UserItinerary userItinerary;

    @Column(name = "TYPE")
    @Enumerated(EnumType.STRING)
    private FlightType type;

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

    @Column(name="BOOKED")
    private Boolean booked;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
         this.lastModifiedDate = Instant.now();
    }

}
