package com.iu.gobike.amadeus.model.travel;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightItinerary {

    private List<Segment> segments;
    private String duration;

}
