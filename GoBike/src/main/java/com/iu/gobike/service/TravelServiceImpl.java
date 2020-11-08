package com.iu.gobike.service;

import com.iu.gobike.dto.BookFlightRequest;
import com.iu.gobike.repository.FlightRepository;
import com.iu.gobike.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author jbhushan
 */
@Component
public class TravelServiceImpl implements TravelService{

    @Autowired
    private FlightRepository flightRepository;

    @Override
    public Boolean bookFlights(BookFlightRequest request) {
        Iterable<Flight> flights = flightRepository.findAllById(request.getIds());
        flights.forEach(flight -> flight.setBooked(true));
        flightRepository.saveAll(flights);
        return Boolean.TRUE;
    }
}
