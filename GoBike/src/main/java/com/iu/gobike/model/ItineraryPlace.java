package com.iu.gobike.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iu.gobike.enums.FlightType;
import lombok.*;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table(name="ITINERARY_PLACE")
public class ItineraryPlace {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ITINERARY")
    @JsonIgnore
    private Itinerary itinerary;

    @JoinColumn(name="PLACE")
    @ManyToOne
    private Place place;

    @Column(name="VISIT_ORDER")
    private int order;

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
