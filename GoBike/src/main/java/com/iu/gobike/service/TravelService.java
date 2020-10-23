package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import org.springframework.http.ResponseEntity;

/**
 * @author jbhushan
 */
public interface TravelService {
    ResponseEntity<SearchAirportResponse> searchAirports(String keyword);
}
