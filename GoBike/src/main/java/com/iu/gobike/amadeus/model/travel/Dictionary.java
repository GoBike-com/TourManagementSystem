package com.iu.gobike.amadeus.model.travel;

import lombok.*;

import java.util.List;
import java.util.Map;

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
public class Dictionary {
    private Map<String,String> aircraft;
    private Map<String,String> carriers;
}
