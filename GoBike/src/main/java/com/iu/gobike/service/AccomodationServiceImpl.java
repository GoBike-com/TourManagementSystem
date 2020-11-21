package com.iu.gobike.service;

import com.iu.gobike.dto.AddAccommodationRequest;
import com.iu.gobike.dto.BookRequest;
import com.iu.gobike.dto.HotelInfo;
import com.iu.gobike.model.Accommodation;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.AccommodationRepository;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.util.GoBikeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;

/**
 * @author jbhushan
 */
@Component
public class AccomodationServiceImpl implements AccomodationService{

    @Autowired
    private AccommodationRepository accommodationRepository;

    @Autowired
    private UserItineraryRepository userItineraryRepository;

    @Override
    public Boolean book(BookRequest request) {
        Iterable<Accommodation> accommodations = accommodationRepository.findAllById(request.getIds());
        accommodations.forEach(accommodation -> accommodation.setBooked(true));
        accommodationRepository.saveAll(accommodations);
        return Boolean.TRUE;
    }

    @Override
    public void addAccommodation(AddAccommodationRequest request, String userName) throws ParseException {
        UserItinerary userItinerary = userItineraryRepository.findByUserUserNameAndItineraryName(userName, request.getItineraryName());
        HotelInfo hotelInfo = request.getHotel();
        Accommodation accommodation = Accommodation.builder().user(userItinerary.getUser()).chainCode(hotelInfo.getChaincode())
                .name(hotelInfo.getName()).amount(Float.parseFloat(hotelInfo.getAmount())).address(hotelInfo.getAddress())
                .checkIn(GoBikeUtil.convert(request.getCheckInDate())).checkOut(GoBikeUtil.convert(request.getCheckInDate()))
                .contact(Long.parseLong(hotelInfo.getPhonenumber())).cityName(request.getCity()).numOfPerson(request.getAdults())
                .postalCode(hotelInfo.getPostalCode()).ratings(Integer.parseInt(hotelInfo.getRating()))
                .createdBy(userName).modifiedBy(userName).userItinerary(userItinerary).build();
        userItinerary.getAccommodations().add(accommodation);
        accommodationRepository.save(accommodation);
        //userItinerary.setAccommodations(List.of(accommodation));
        // userItineraryRepository.save(userItinerary);
    }
}
