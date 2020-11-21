package com.iu.gobike.service;

import com.iu.gobike.dto.AddAccommodationRequest;
import com.iu.gobike.dto.BookRequest;

import java.text.ParseException;

/**
 * @author jbhushan
 */
public interface AccomodationService {

    Boolean book(BookRequest request);

    void addAccommodation(AddAccommodationRequest request, String userName) throws ParseException;

}
