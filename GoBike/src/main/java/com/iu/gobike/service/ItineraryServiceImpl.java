package com.iu.gobike.service;

import com.iu.gobike.dto.*;
import com.iu.gobike.enums.FlightType;
import com.iu.gobike.model.*;
import com.iu.gobike.repository.*;
import com.iu.gobike.util.GoBikeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityExistsException;
import java.text.ParseException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
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
    private ItineraryRepository itineraryRepository;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private PlanRepository planRepository;

    @Override
    public UserItinerary create(CreateItineraryRequest request, String userName) throws ParseException, EntityExistsException {

        Itinerary itinerary = itineraryRepository.findByName(request.getName());

        if(itinerary == null) {
            User user = userRepository.findByUserName(userName);
            Instant startDate = Instant.now();
            Instant endDate = Instant.now();
            if (request.getStartDate() != null) {
                startDate = GoBikeUtil.convert(request.getStartDate());
            }
            if (request.getEndDate() != null) {
                endDate = GoBikeUtil.convert(request.getEndDate());
            }
            itinerary = Itinerary.builder().name(request.getName())
                    .startDate(startDate).endDate(endDate).createdBy(userName).modifiedBy(userName).build();
            UserItinerary userItinerary = UserItinerary.builder().itinerary(itinerary).user(user)
                    .createdBy(userName).modifiedBy(userName).build();
            userItinerary = userItineraryRepository.save(userItinerary);
            return userItinerary;
        } else {
            throw new EntityExistsException();
        }
    }

    @Override
    public Itinerary addUser(AddUserToItineraryRequest request) {
        UserItinerary userItinerary = userItineraryRepository
                .findByUserUserNameAndItineraryName(request.getUserName(), request.getItineraryName());
        Itinerary itinerary = userItinerary.getItinerary();
        User newUser = userRepository.findByUserName(request.getNewUserName());
        UserItinerary newUserItinerary = UserItinerary.builder().itinerary(itinerary).user(newUser)
                .createdBy(request.getUserName()).modifiedBy(request.getUserName()).build();
        userItineraryRepository.save(newUserItinerary);
        return itinerary;
    }

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
    public ItineraryDetail getItinerary(String userName, String name) {
        UserItinerary userItinerary = userItineraryRepository.findByUserUserNameAndItineraryName(userName,name);
        Set<User> users =  userItineraryRepository.findByItineraryName(userItinerary.getItinerary().getName());
        ItineraryDetail itineraryDetail = ItineraryDetail.builder().accommodations(userItinerary.getAccommodations())
                .flights(userItinerary.getFlights()).users(users).itinerary(userItinerary.getItinerary()).build();
        return itineraryDetail;
    }

    @Override
    public GetItineraryDetailsResponse getAllItineraries(String userName) {
        User user = userRepository.findByUserName(userName);
        List<UserItinerary> u = userItineraryRepository.findByUserId(user.getId());
       return  buildItineraryResponse(u,userName);
    }

    @Override
    public Plan savePlan(Plan plan) {
//        if(plan.getId() != null){
//
//        } else {
//
//        }
//        Itinerary itinerary = itineraryRepository.findByName(request.getItineraryName());
//        Plan plan = Plan.builder().itinerary(itinerary).date(request.getDate()).description(request.getDescription())
//                .createdBy(request.getLoggedInUser()).modifiedBy(request.getLoggedInUser()).build();
        return planRepository.save(plan);
    }

    private GetItineraryDetailsResponse buildItineraryResponse(List<UserItinerary> userItineraries, String userName) {
        List<ItineraryDetail> details = new ArrayList<ItineraryDetail>();
        userItineraries.stream().map(userItinerary -> {
            ItineraryDetail itineraryDetail = ItineraryDetail.builder()
                    .flights(userItinerary.getFlights()).accommodations(userItinerary.getAccommodations())
                    .itinerary(userItinerary.getItinerary()).build();
            Set<User> users = userItineraryRepository.findByItineraryName(userItinerary.getItinerary().getName());
            itineraryDetail.setUsers(users);
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
         flightRepository.saveAll(flights);
    }

    private Flight transformFlightDetails(FlightInfo flightInfo, UserItinerary userItinerary) {
       return Flight.builder().airline(flightInfo.getAirline()).arrivalIataCode(flightInfo.getArrivalIataCode())
                .arrivalTerminal(flightInfo.getArrivalTerminal()).deptIataCode(flightInfo.getDeptIataCode())
                .deptTerminal(flightInfo.getDeptTerminal()).userItinerary(userItinerary).duration(flightInfo.getDuration())
               .type(flightInfo.isReturnFlight()?FlightType.RETURN:FlightType.TRAVEL).build();
    }
}
