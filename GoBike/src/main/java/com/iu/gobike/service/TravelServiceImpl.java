package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.amadeus.dto.SearchFlightAmadeusResponse;
import com.iu.gobike.util.AmadeusRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

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
        return r.getBody();
    }

    @Override
    public SearchFlightAmadeusResponse searchFlights(SearchFlightRequest request) {
        String url = "v2/shopping/flight-offers?currencyCode=USD&originLocationCode=" + request.getSource() +
                "&destinationLocationCode=" + request.getDestination() + "&departureDate=" + request.getTravelDate() +
                "&adults=" + request.getAdults()+"&nonStop="+request.isNonStop()+"&travelClass="+request.getTravelClass().name();
        String returnDate = request.getReturnDate();
        if(returnDate!=null){
            url = url+"&returnDate="+returnDate;
        }
        ResponseEntity<SearchFlightAmadeusResponse> r = amadeusRestTemplate.get(url, SearchFlightAmadeusResponse.class);
        //TODO: Jyoti convert into goBike response
        return r.getBody();
    }
}
