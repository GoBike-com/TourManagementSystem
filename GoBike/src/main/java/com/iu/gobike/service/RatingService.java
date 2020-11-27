package com.iu.gobike.service;

import com.iu.gobike.dto.RatingRequest;
import com.iu.gobike.model.Rating;

import java.util.List;

/**
 * @author jbhushan
 */
public interface RatingService {

    Rating rate(RatingRequest request);
}
