package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "{username}/itinerary")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class ItineraryController {

    @Autowired
    private ItineraryService itineraryService;

    /**
     * This API is responsible for saving selected flight details to itinerary
     */
    @PostMapping(path = "/travel", produces = "application/json")
    public ResponseEntity<String> addTravel(@PathVariable("username") String userName, @RequestBody AddTravelRequest request) {
         itineraryService.addTravel(request,userName);
         return  ResponseEntity.ok("");

    }

    @GetMapping(produces = "application/json")
    public ResponseEntity<List<UserItinerary>> getAllItineraries(@PathVariable("username") String username){
      return ResponseEntity.ok(itineraryService.getAllItineraries(username));
    }

    @GetMapping(path="{id}", produces = "application/json")
    public ResponseEntity<UserItinerary> getItineraryDetails(@PathVariable("id") String itineraryId){
            return ResponseEntity.ok(itineraryService.getItinerary(itineraryId));
    }
}
