package com.iu.gobike.dto;

import lombok.*;

import java.util.List;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class BookFlightRequest {

    private String userName;
    private List<Long> ids;

}
