package com.iu.gobike.amadeus.model.travel;

import lombok.*;

import java.util.Date;

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
public class Terminal {
    private String iataCode;
    private String terminal;
    private Date at;
}
