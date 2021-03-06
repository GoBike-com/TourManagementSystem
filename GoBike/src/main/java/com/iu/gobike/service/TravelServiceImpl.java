package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.BookRequest;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.enums.FlightType;
import com.iu.gobike.model.Flight;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.FlightRepository;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.util.GoBikeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.Instant;
import java.time.LocalTime;

/**
 * @author jbhushan
 */
@Component
public class TravelServiceImpl implements TravelService{

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private UserItineraryRepository userItineraryRepository;

    @Override
    public Boolean bookFlights(BookRequest request) {
        Iterable<Flight> flights = flightRepository.findAllById(request.getIds());
        flights.forEach(flight -> flight.setBooked(true));
        flightRepository.saveAll(flights);
        return Boolean.TRUE;
    }

    @Override
    public void addFlight(AddTravelRequest request, String userName) throws ParseException {
        UserItinerary userItinerary = userItineraryRepository.findByUserUserNameAndItineraryName(userName, request.getItineraryName());
        FlightInfo flightInfo = request.getFlight();

        LocalTime deptTime = LocalTime.now();
        if(flightInfo.getTakeOffTime() != null){
            deptTime = GoBikeUtil.convertTime(flightInfo.getTakeOffTime().intern());
        }
        LocalTime arrivalTime = LocalTime.now();
        if(flightInfo.getArrivalTime() != null){
            arrivalTime = GoBikeUtil.convertTime(flightInfo.getArrivalTime().intern());
        }

        Flight flight = Flight.builder().airline(flightInfo.getAirline()).arrivalIataCode(flightInfo.getArrivalIataCode())
                .arrivalTerminal(flightInfo.getArrivalTerminal()).deptIataCode(flightInfo.getDeptIataCode())
                .deptTerminal(flightInfo.getDeptTerminal()).userItinerary(userItinerary).duration(flightInfo.getDuration())
                .createdBy(userName).modifiedBy(userName).deptTime(deptTime).arrivalTime(arrivalTime)
                .type(flightInfo.isReturnFlight()? FlightType.RETURN:FlightType.TRAVEL).travelDate(GoBikeUtil.convertDate(request.getTravelDate()))
                .price(flightInfo.getPrice()).travelClass(request.getTravelClass()).build();

        flightRepository.save(flight);
    }

    @Override
    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }
}
