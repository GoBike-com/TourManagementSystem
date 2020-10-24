package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * @author jbhushan
 */
public interface TravelService {

    ResponseEntity<SearchAirportResponse> searchAirports(String keyword);

    ResponseEntity<SearchFlightResponse> searchFlights(SearchFlightRequest request);
}
