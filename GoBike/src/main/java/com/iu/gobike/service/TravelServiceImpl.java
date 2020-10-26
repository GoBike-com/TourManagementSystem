package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.util.AmadeusRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
    public SearchAirportResponse searchAirports(String keyword) {
        ResponseEntity<SearchAirportResponse> r = amadeusRestTemplate.get("v1/reference-data/locations?subType=CITY&countryCode=US&view=LIGHT&keyword="+keyword, SearchAirportResponse.class);

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Baeldung-Example-Header",
                "Value-ResponseEntityBuilderWithHttpHeaders");
        return r.getBody();
    }
}
