package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.util.AmadeusRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

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
}
