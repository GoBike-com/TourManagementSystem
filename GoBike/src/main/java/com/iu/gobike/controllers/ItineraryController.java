package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.CreateItineraryRequest;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "itinerary")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class ItineraryController {

    @Autowired
    private ItineraryService itineraryService;

    @Autowired
    private UserItineraryRepository userItineraryRepository;

    /**
     * This API is responsible for creating new itinerary
     */
    @PostMapping(path = "/{username}", produces = "application/json")
    public ResponseEntity<UserItinerary> create(@PathVariable("username") String userName, @RequestBody CreateItineraryRequest createItineraryRequest) {
        UserItinerary userItinerary = null;
        try {
            userItinerary = itineraryService.create(createItineraryRequest,userName);
        } catch (ParseException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return  ResponseEntity.ok(userItinerary);
    }

    /**
     * This API is responsible for saving selected flight details to itinerary
     */
    @PostMapping(path = "/{username}/travel", produces = "application/json")
    public ResponseEntity<String> addTravel(@PathVariable("username") String userName, @RequestBody AddTravelRequest request) {
         itineraryService.addTravel(request,userName);
         return  ResponseEntity.ok("SAVED");
    }

    @GetMapping(path = "/{username}",produces = "application/json")
    public ResponseEntity<List<UserItinerary>> getAllItineraries(@PathVariable("username") String username){
        ResponseEntity responseEntity = null;
        List<UserItinerary> itineraries = itineraryService.getAllItineraries(username);
        if(itineraries != null){
            responseEntity = ResponseEntity.ok(itineraries);
        } else {
            responseEntity = ResponseEntity.noContent().build();
        }
       return responseEntity;
    }

    @GetMapping(path="/{username}/{name}", produces = "application/json")
    public ResponseEntity<UserItinerary> getItineraryDetails(@PathVariable("username") String userName, @PathVariable("name") String name){
            return ResponseEntity.ok(itineraryService.getItinerary(userName, name));
    }

    @GetMapping( produces = "application/json")
    public ResponseEntity<Iterable<UserItinerary>> getALl(){
        return ResponseEntity.ok(userItineraryRepository.findAll());
    }
}
