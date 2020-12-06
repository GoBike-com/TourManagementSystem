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
public class CurrencyConversionRequest {

    private String baseCurrency;
    private String targetCurrency;
    private Double amount;

}
