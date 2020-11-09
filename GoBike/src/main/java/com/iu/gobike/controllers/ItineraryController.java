package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.GetItineraryDetailsResponse;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
     * This API is responsible for saving selected flight details to itinerary
     */
    @PostMapping(path = "/{username}/travel", produces = "application/json")
    public ResponseEntity<String> addTravel(@PathVariable("username") String userName, @RequestBody AddTravelRequest request) {
         itineraryService.addTravel(request,userName);
         return  ResponseEntity.ok("SAVED");
    }

    @GetMapping(path = "/{username}",produces = "application/json")
    public ResponseEntity<GetItineraryDetailsResponse> getAllItineraries(@PathVariable("username") String username){
        GetItineraryDetailsResponse response = itineraryService.getAllItineraries(username);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path="/{username}/{id}", produces = "application/json")
    public ResponseEntity<UserItinerary> getItineraryDetails(@PathVariable("id") String itineraryId){
            return ResponseEntity.ok(itineraryService.getItinerary(itineraryId));
    }

    @GetMapping( produces = "application/json")
    public ResponseEntity<Iterable<UserItinerary>> getALl(){
        return ResponseEntity.ok(userItineraryRepository.findAll());
    }
}
