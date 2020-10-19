package com.iu.gobike.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

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
public class Payment {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "TRANSACTION_NUMBER")
    private Long transactionNumber;

    @JoinColumn(name = "USER")
    @ManyToOne
    private User user;

    @Column(name = "TRANSACTION_DATE")
    @NonNull
    private Instant TransactionDate;

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

    @Column(name="AMOUNT")
    private Integer amount;

    @PrePersist
    void onCreate() {
        this.createdDate = this.lastModifiedDate = Instant.now();
    }

    @PreUpdate
    void onUpdate() {
        this.lastModifiedDate = Instant.now();
    }

}
