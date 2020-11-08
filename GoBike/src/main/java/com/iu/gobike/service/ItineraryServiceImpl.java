package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.model.Flight;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.User;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.FlightRepository;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author jbhushan
 */
@Component
public class ItineraryServiceImpl implements ItineraryService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserItineraryRepository userItineraryRepository;

    @Autowired
    private FlightRepository flightRepository;

    @Override
    public void addTravel(AddTravelRequest request, String userName) {
        User user = userRepository.findByUserName(userName);
        UserItinerary userItinerary = null;
        if(request.getItineraryId()!=null){
            userItinerary = userItineraryRepository.findByUserIdAndItineraryId(user.getId(), request.getItineraryId());
        } else {
            userItinerary = userItineraryRepository.findByUserId(user.getId());
        }
        if(userItinerary == null) {
            Itinerary itinerary = Itinerary.builder().build();
            userItinerary = UserItinerary.builder().user(user).itinerary(itinerary).build();
        }
        saveFlightDetails(request,userItinerary);

    }

    @Override
    public UserItinerary getItinerary(String id) {
        Optional<UserItinerary> userItinerary = userItineraryRepository.findById(Long.valueOf(id));
        return userItinerary.get();
    }

    private void saveFlightDetails(AddTravelRequest request, UserItinerary userItinerary) {
         List<Flight> flights =  new ArrayList<Flight>();
         flights.add(transformFlightDetails(request.getFlight(),userItinerary));
         flights.add(transformFlightDetails(request.getReturnFlight(),userItinerary));
         flightRepository.saveAll(flights);
    }

    private Flight transformFlightDetails(FlightInfo flightInfo, UserItinerary userItinerary) {
       return Flight.builder().airline(flightInfo.getAirline()).arrivalIataCode(flightInfo.getArrivalIataCode())
                .arrivalTerminal(flightInfo.getArrivalTerminal()).deptIataCode(flightInfo.getDeptIataCode())
                .deptTerminal(flightInfo.getDeptTerminal()).userItinerary(userItinerary).duration(flightInfo.getDuration()).build();
    }
}
