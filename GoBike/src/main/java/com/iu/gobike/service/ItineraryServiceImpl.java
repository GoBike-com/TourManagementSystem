package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.FlightInfo;
import com.iu.gobike.dto.GetItineraryDetailsResponse;
import com.iu.gobike.dto.ItineraryDetail;
import com.iu.gobike.enums.FlightType;
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
import java.util.stream.Collectors;

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
        }
        if(userItinerary == null) {
            Itinerary itinerary = Itinerary.builder().build();
            userItinerary = UserItinerary.builder().user(user).itinerary(itinerary).build();
        }
        userItineraryRepository.save(userItinerary);
        saveFlightDetails(request,userItinerary);

    }

    @Override
    public UserItinerary getItinerary(String id) {
        Optional<UserItinerary> userItinerary = userItineraryRepository.findById(Long.valueOf(id));
        return userItinerary.get();
    }

    @Override
    public GetItineraryDetailsResponse getAllItineraries(String userName) {
        User user = userRepository.findByUserName(userName);
        List<UserItinerary> userItineraries = userItineraryRepository.findByUserId(user.getId());
        return buildItineraryResponse(userItineraries,userName);
    }

    private GetItineraryDetailsResponse buildItineraryResponse(List<UserItinerary> userItineraries, String userName) {
        List<ItineraryDetail> details = new ArrayList<ItineraryDetail>();
        userItineraries.stream().map(userItinerary -> {
            ItineraryDetail itineraryDetail = ItineraryDetail.builder()
                    .flights(userItinerary.getFlights()).userItinerary(userItinerary.getId())
                    .itinerary(userItinerary.getItinerary()).build();
            details.add(itineraryDetail);
            return details;
        }).collect(Collectors.toList());
        GetItineraryDetailsResponse response = GetItineraryDetailsResponse.builder().itineraryDetails(details)
                .userName(userName).build();
        return response;
    }

    private void saveFlightDetails(AddTravelRequest request, UserItinerary userItinerary) {
         List<Flight> flights =  new ArrayList<Flight>();
         if(request.getFlight() != null) {
            flights.add(transformFlightDetails(request.getFlight(), userItinerary));
        }
//         if(request.getReturnFlight() !=null) {
//             flights.add(transformFlightDetails(request.getReturnFlight(), userItinerary,FlightType.RETURN));
//         }
         flightRepository.saveAll(flights);
    }

    private Flight transformFlightDetails(FlightInfo flightInfo, UserItinerary userItinerary) {
       return Flight.builder().airline(flightInfo.getAirline()).arrivalIataCode(flightInfo.getArrivalIataCode())
                .arrivalTerminal(flightInfo.getArrivalTerminal()).deptIataCode(flightInfo.getDeptIataCode())
                .deptTerminal(flightInfo.getDeptTerminal()).userItinerary(userItinerary).duration(flightInfo.getDuration())
               .type(flightInfo.isReturnFlight()?FlightType.RETURN:FlightType.TRAVEL).build();
    }
}
