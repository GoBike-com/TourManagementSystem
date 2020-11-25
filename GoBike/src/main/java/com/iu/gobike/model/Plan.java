package com.iu.gobike.model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;

/**
 * This model is responsible for storing day wise itinerary
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table
public class Plan {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @JoinColumn(name = "itinerary")
    @ManyToOne
    private Itinerary itinerary;

    @Column(name="DATE")
    private Instant date;

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

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
        this.lastModifiedDate = Instant.now();
    }

}
