package com.iu.gobike.service;

import com.iu.gobike.dto.BookRequest;
import com.iu.gobike.model.Accommodation;
import com.iu.gobike.model.Flight;
import com.iu.gobike.repository.AccommodationRepository;
import com.iu.gobike.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author jbhushan
 */
@Component
public class AccomodationServiceImpl implements AccomodationService{

    @Autowired
    private AccommodationRepository accommodationRepository;

    @Override
    public Boolean book(BookRequest request) {
        Iterable<Accommodation> accommodations = accommodationRepository.findAllById(request.getIds());
        accommodations.forEach(accommodation -> accommodation.setBooked(true));
        accommodationRepository.saveAll(accommodations);
        return Boolean.TRUE;
    }
}
