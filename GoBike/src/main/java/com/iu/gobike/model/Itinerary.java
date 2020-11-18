package com.iu.gobike.model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

/**
 * This model is responsible for storing al the details for an itinerary
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table
public class Itinerary {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NUM_OF_DAYS")
    private Integer numberOfDays;

    @Column(name="START_DATE")
    private Instant startDate;

    @Column(name="END_DATE")
    private Instant endDate;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name="CREATED_DATE", updatable = false)
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    private Instant lastModifiedDate;

    @Column(name="CREATED_BY")
    private String createdBy;

    @Column(name="MODIFIED_BY")
    private String modifiedBy;

//    @OneToMany(mappedBy = "itinerary", fetch = FetchType.LAZY)
//    private List<UserItinerary> itineraries;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
        this.lastModifiedDate = Instant.now();
    }

}
