package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.util.AmadeusRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author jbhushan
 */
@Component
public class TravelServiceImpl implements TravelService {

    @Autowired
    AmadeusRestTemplate amadeusRestTemplate;

    @Override
    public  ResponseEntity<SearchAirportResponse> searchAirports(String keyword) {
         return amadeusRestTemplate.get("v1/reference-data/locations?subType=CITY&countryCode=US&view=LIGHT&keyword="+keyword, SearchAirportResponse.class);
    }

    @Override
    public ResponseEntity<SearchFlightResponse> searchFlights(SearchFlightRequest request) {
        return amadeusRestTemplate.get("shopping/flight-offers", SearchFlightResponse.class);
    }
}
