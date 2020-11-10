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

    private String destination;
    private String checkInDate;
    private String checkOutDate;
    private int roomType;
    private int adults;
    private int ratings;
    private String boardType;
    private HotelInfo hotel;
    private Long itineraryId;

}
