package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddAccommodationRequest;
import com.iu.gobike.dto.BookRequest;
import com.iu.gobike.service.AccomodationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/accommodation")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class AccomodationController {

    @Autowired
    private AccomodationService accomodationService;

    /**
     * This API is responsible for booking selected accommodation by the user
     * @return list of airports
     */
    @PutMapping(path = "/book", produces = "application/json")
    public ResponseEntity<Boolean> book(@RequestBody BookRequest request) {
        return ResponseEntity.ok(accomodationService.book(request));
    }

    /**
     * This API is responsible for saving selected flight details to itinerary
     */
    @PostMapping(path = "/{username}", produces = "application/json")
    public ResponseEntity<String> addAccommodation(@PathVariable("username") String userName, @RequestBody AddAccommodationRequest request) {
        ResponseEntity<String> responseEntity = null;
        try {
            accomodationService.addAccommodation(request,userName);
            responseEntity = ResponseEntity.ok("SAVED");
        } catch (ParseException e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    /**
     * This API is responsible for deleting accommodation from itinerary
     */
    @DeleteMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<Boolean> removeAccommodation(@PathVariable("id") Long id) {
        ResponseEntity<String> responseEntity = null;
        accomodationService.deletedAccommodation(id);
        return ResponseEntity.ok(true);
    }

}
