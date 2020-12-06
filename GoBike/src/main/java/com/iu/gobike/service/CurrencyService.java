package com.iu.gobike.service;

import com.iu.gobike.dto.RatingRequest;
import com.iu.gobike.model.Rating;

/**
 * @author jbhushan
 */
public interface CurrencyService {

    Double convert(String base, String target, Double amount);
}
