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
@EqualsAndHashCode
@Builder
@Entity
@Table
public class Review {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name = "comment")
    private String comment;

    @JoinColumn(name = "Trip")
    @ManyToOne
    private Trip trip;

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
