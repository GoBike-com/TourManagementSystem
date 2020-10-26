package com.iu.gobike.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Blob;
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
public class Place {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME", unique = true)
    private String name;

    @Column(name = "STATE")
    private String state;

    @Column(name = "COUNTRY")
    private String country;

    @Lob
    @Column(name = "DESCRIPTION", columnDefinition="BLOB")
    private Blob description;

    @OneToMany(mappedBy="place")
    private List<Image> image;

    @Column(name = "ratings")
    private Integer ratings;

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
