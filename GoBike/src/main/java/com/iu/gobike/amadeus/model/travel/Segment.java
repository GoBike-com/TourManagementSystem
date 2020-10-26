package com.iu.gobike.amadeus.model.travel;

import lombok.*;

/**
 * @author jbhushan
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Segment {

    private Terminal departure;
    private Terminal arrival;
    /**
     * Airline Code
     */
    private String carrierCode;
    private String number;
    private Aircraft aircraft;
}
