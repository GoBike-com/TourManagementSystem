package com.iu.gobike.service;

import com.iu.gobike.amadeus.helper.AmadeusHelper;
import com.iu.gobike.amadeus.model.travel.Dictionary;
import com.iu.gobike.amadeus.model.travel.Flight;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.amadeus.dto.SearchFlightAmadeusResponse;
import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.util.AmadeusRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
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
        return r.getBody();
    }

    @Override
    public SearchFlightResponse searchFlights(SearchFlightRequest request) {
        String url = "v2/shopping/flight-offers?currencyCode=USD&originLocationCode=" + request.getSource() +
                "&destinationLocationCode=" + request.getDestination() + "&departureDate=" + request.getTravelDate() +
                "&adults=" + request.getAdults()+"&nonStop="+request.isNonStop()+"&travelClass="+request.getTravelClass();
        String returnDate = request.getReturnDate();
        if(returnDate!=null){
            url = url+"&returnDate="+returnDate;
        }
        ResponseEntity<SearchFlightAmadeusResponse> r = amadeusRestTemplate.get(url, SearchFlightAmadeusResponse.class);
        //Populate flight information
        List<FlightInfo> flightDetails= AmadeusHelper.extractFlightDetails(r.getBody());
        return buildResponse(flightDetails,request );
    }

    private SearchFlightResponse buildResponse(List<FlightInfo> flightDetails, SearchFlightRequest request ){
        SearchFlightResponse response = SearchFlightResponse.builder().travelDate(request.getTravelDate())
                .returnDate(request.getReturnDate()).adults(request.getAdults()).travelClass(request.getTravelClass()).build();
         List<FlightInfo> flights = new ArrayList<FlightInfo>();
         List<FlightInfo> returnFlights = new ArrayList<FlightInfo>();
        String source = request.getSource();
        for(FlightInfo flightInfo : flightDetails){
           if(flightInfo.getDeptIataCode().equals(source)){
               flights.add(flightInfo);
           }else{
               returnFlights.add(flightInfo);
           }
        }
        response.setFlights(flights);
        response.setReturnFlights(returnFlights);
        return response;
    }
}
