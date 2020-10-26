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
public class Price {
    private String currency;
    private float total;
    private float base;
}
