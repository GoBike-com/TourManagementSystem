package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.model.Flight;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author jbhushan
 */
@Component
public class ItineraryServiceImpl implements ItineraryService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addTravel(AddTravelRequest request, String userName) {
        User user = userRepository.findByUserName(userName);

        tranformFlightDetails(request.getFlight());
        tranformFlightDetails(request.getReturnFlight());
        Flight returnFlight = Flight.builder().build();

        return null;
    }

    private void tranformFlightDetails(FlightInfo flightInfo) {
        //request.getReturnFlight();
        Flight travel = Flight.builder().airline(flightInfo.getAirline()).arrivalIataCode(flightInfo.getArrivalIataCode())
                .arrivalTerminal(flightInfo.getArrivalTerminal()).deptIataCode(flightInfo.getDeptIataCode())
                .deptTerminal(flightInfo.getDeptTerminal()).duration(flightInfo.getDuration()).build();
    }
}
