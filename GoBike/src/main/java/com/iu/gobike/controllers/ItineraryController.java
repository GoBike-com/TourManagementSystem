package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
     * This API is responsible for getting airport with the given keyword
     * @return list of airports
     */
    @PostMapping(path = "/travel", produces = "application/json")
    public ResponseEntity<String> addTravel(@PathVariable("username") String userName, @RequestBody AddTravelRequest request) {
         itineraryService.addTravel(request,userName);
         return  ResponseEntity.ok("");

    }
}
