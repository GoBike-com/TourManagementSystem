package com.iu.gobike.service;

import com.iu.gobike.dto.BookingRequest;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.UserItineraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UserItineraryServiceImpl implements UserItineraryService {
    @Autowired
    private UserItineraryRepository userItineraryRepository;

    @Override
    public Boolean book(String userName, String itineraryName) {
        UserItinerary userItinerary =
                userItineraryRepository.findByUserUserNameAndItineraryName(userName, itineraryName);
        userItinerary.getFlights().stream().forEach(flight -> flight.setBooked(true));
        userItinerary.getAccommodations().stream().forEach(accommodation -> accommodation.setBooked(true));
        userItinerary.setBooked(true);
        userItinerary = userItineraryRepository.save(userItinerary);
        return userItinerary.isBooked();
    }
}
