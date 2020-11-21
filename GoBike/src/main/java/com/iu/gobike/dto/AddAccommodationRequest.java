package com.iu.gobike.dto;

import lombok.*;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class AddAccommodationRequest {

    private String city;
    private String checkInDate;
    private String checkOutDate;
    private int roomType;
    private int adults;
    private String boardType;
    private HotelInfo hotel;
    private String itineraryName;

}
