package com.iu.gobike.amadeus.helper;

import com.iu.gobike.amadeus.dto.SearchFlightAmadeusResponse;
import com.iu.gobike.amadeus.model.travel.Dictionary;
import com.iu.gobike.amadeus.model.travel.Flight;
import com.iu.gobike.amadeus.model.travel.FlightItinerary;
import com.iu.gobike.amadeus.model.travel.Terminal;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.dto.SearchFlightResponse;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author jbhushan
 */
public class AmadeusHelper {

    public static List<FlightInfo> extractFlightDetails(SearchFlightAmadeusResponse amadeusResponse){
       List<Flight> details = amadeusResponse.getData();
       Dictionary dictionary = amadeusResponse.getDictionaries();
       if(details!=null && dictionary!=null){
          // details.stream().map(flight -> flight.getItineraries().stream().map(itinerary -> itinerary.getSegments()));
           for(Flight flightDetails: details){
               List<FlightItinerary> itineraries = flightDetails.getItineraries();

               List<List<FlightInfo>> ino = itineraries.stream().map(itinerary -> {
//                   FlightInfo flightInfo = FlightInfo.builder().duration(itinerary.getDuration())
//                           .airline().build();
                  //SearchFlightResponse response = SearchFlightResponse.builder()..build();;
                   List<FlightInfo> flights = new ArrayList<FlightInfo>() ;
                   List<FlightInfo> returnFlight = new ArrayList<FlightInfo>() ;
                   List<FlightInfo> i = itinerary.getSegments().stream().map(segment -> {
                       FlightInfo flightInfo = populateFlightDetails(dictionary, flightDetails, itinerary, segment);
                       return flightInfo;
                   }).collect(Collectors.toList());
                 //  return null;
                  return i;
               }).collect(Collectors.toList());

               return ino.get(0);
           }
       }
       return null;
       }

    private static FlightInfo populateFlightDetails(Dictionary dictionary, Flight flightDetails, FlightItinerary itinerary, com.iu.gobike.amadeus.model.travel.Segment segment) {
        Terminal arrival = segment.getArrival();
        Terminal dept = segment.getDeparture();
        FlightInfo flightInfo = FlightInfo.builder().duration(itinerary.getDuration())
                .airline(getCarrier(dictionary.getCarriers(), segment.getCarrierCode()))
                .duration(itinerary.getDuration()).price(flightDetails.getPrice().getTotal())
                .arrivalTime(new Timestamp(arrival.getAt().getTime()))
                .arrivalTime(new Timestamp(dept.getAt().getTime()))
                .arrivalTerminal(arrival.getTerminal())
                .deptTerminal(dept.getTerminal())
                .arrivalIataCode(arrival.getIataCode())
                .deptIataCode(dept.getIataCode())
                .build();
        return flightInfo;
    }

    private static String getCarrier(Map<String,String> carriers, String carrierCode ) {
    return carriers.get(carrierCode);

    }
}
