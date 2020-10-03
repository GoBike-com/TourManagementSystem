package com.iu.gobike.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Builder
@Entity
@Table
public class Trip {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "TRIP_NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "DAYS")
    private Integer days;

    @Column(name = "START_CITY")
    private String startCity;

    @Column(name = "DESTINATION")
    private String destination;

    @Column(name = "COST")
    private Long cost;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "START_DATE")
    private Instant startDate;

    @Column(name = "END_DATE")
    private Instant endDate;

    @Column(name="CREATED_DATE", updatable = false)
    @CreatedDate
    private Instant createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    @LastModifiedDate
    private Instant lastModifiedDate;

    @Column(name="CREATED_BY")
    private String createdBy;

    @Column(name="MODIFIED_BY")
    private String modifiedBy;

}