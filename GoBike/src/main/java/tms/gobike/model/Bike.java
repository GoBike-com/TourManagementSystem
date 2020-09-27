package tms.gobike.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Builder
@Entity
public class Bike {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column
    private String model;

    @Column
    private Long count;

}
