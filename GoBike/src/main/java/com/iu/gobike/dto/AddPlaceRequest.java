package com.iu.gobike.dto;

import lombok.*;

/**
 * @author woboland
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class AddPlaceRequest {

    private String placeName;
    private String itineraryName;

}