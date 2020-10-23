package com.iu.gobike.amadeus.model.travel;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Airport {

    private String name;
    private String iataCode;
    private String detailedName;

}
