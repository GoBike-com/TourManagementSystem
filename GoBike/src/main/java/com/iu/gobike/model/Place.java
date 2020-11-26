package com.iu.gobike.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Builder
@Entity
@Table
public class Place implements Serializable {

    private static final long serialversionUID = 1l;

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME", unique = true)
    private String name;

    @Column(name = "STATE")
    private String state;

    @Column(name = "CITY_CODE")
    private String cityCode;

    @Column(name = "COUNTRY")
    private String country;

    @Lob
    @Column(name = "DESCRIPTION", columnDefinition="BLOB")
    private String description;

    @OneToMany(mappedBy="place")
    @JsonManagedReference
    private List<Image> image;

    @OneToMany(mappedBy = "place")
    @JsonManagedReference
    private List<Restaurant> restaurant;

    @OneToMany(mappedBy = "place")
    @JsonManagedReference
    private List<Activity> activity;

    @OneToMany(mappedBy = "place")
    @JsonManagedReference
    private List<Hotel> hotel;

    @Column(name = "ratings")
    private float ratings;

    @Column(name = "rating_count")
    private int ratingsCount;

    @Column(name="CREATED_DATE", updatable = false)
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    private Instant lastModifiedDate;

    @Column(name="LATITUDE")
    private Float latitude;

    @Column(name="LONGITUDE")
    private Float longitude;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
         this.lastModifiedDate = Instant.now();
    }
}
