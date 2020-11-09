package com.iu.gobike.model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

/**
 * @author jbhushan
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="USER_ITINERARY")
public class UserItinerary {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @JoinColumn(name = "USER")
    @ManyToOne
    private User user;

    @JoinColumn(name = "ITINERARY")
    @ManyToOne(cascade = CascadeType.ALL)
    private Itinerary itinerary;

    @OneToMany(mappedBy = "userItinerary")
    private List<Flight> flights;

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
