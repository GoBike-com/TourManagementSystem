package com.iu.gobike.dto;

import com.iu.gobike.enums.TravelClass;
import lombok.*;

import javax.persistence.Enumerated;
import java.time.Instant;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class SearchFlightRequest {

    private String source;
    private String destination;
    private boolean nonStop;
    private String travelDate;
    private String returnDate;
    private int adults;
 //   @Enumerated
    private TravelClass travelClass;

}
