package com.iu.gobike.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.Instant;

/**
 * This model is responsible for storing saved/booked accomodation for an itinerary by an user
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table
public class Accommodation {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @JoinColumn(name = "USER")
    @ManyToOne
    private User user;

    @Column(name = "CHAIN_CODE")
    private String chainCode;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CITY_CODE")
    private String cityCode;

    @Column(name = "CITY_NAME")
    private String cityName;

    @Column(name = "POSTAL_CODE")
    private String postalCode;

    @Column(name = "CHECK_IN")
    @NonNull
    private Instant checkIn;

    @Column(name = "CHECK_OUT")
    @NonNull
    private Instant checkOut;

    @Column(name = "AMOUNT")
    private Float amount;

    @Column(name = "NUM_OF_ROOM")
    private Integer numOfRoom;

    @Column(name = "NUM_OF_PERSON")
    private Integer numOfPerson;

    @Column(name = "CONTACT")
    private Long contact;

    @Column(name = "FAX")
    private Long fax;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "booked")
    private Boolean booked;

    @Column(name="CREATED_DATE", updatable = false)
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    private Instant lastModifiedDate;

    @Column(name="CREATED_BY")
    private String createdBy;

    @Column(name="MODIFIED_BY")
    private String modifiedBy;

    @Column(name="RATINGS")
    private Integer ratings;

    @ManyToOne
    @JoinColumn(name = "USER_ITINERARY")
    @JsonIgnore
    private UserItinerary userItinerary;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
        this.lastModifiedDate = Instant.now();
    }

}
