package com.iu.gobike.controllers;

import com.iu.gobike.dto.*;
import com.iu.gobike.service.AmadeusTravelService;
import com.iu.gobike.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/travel")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class TravelController {

    @Autowired
    private AmadeusTravelService amadeusTravelService;

    @Autowired
    private TravelService travelService;
    /**
     * This API is responsible for getting airport with the given keyword
     * @return list of airports
     */
    @GetMapping(path = "/airport/search/{keyword}", produces = "application/json")
    public ResponseEntity<SearchAirportResponse> searchAirport(@PathVariable("keyword") String keyword) {
        SearchAirportResponse response = amadeusTravelService.searchAirports(keyword);
         return  ResponseEntity.ok(response);

    }

    /**
     * This API is responsible for getting airport with the given keyword
     * @return list of airports
     */
    @PostMapping(path = "/search/flight", produces = "application/json")
    public ResponseEntity<SearchFlightResponse> searchFlights(@RequestBody SearchFlightRequest request) {
        SearchFlightResponse response = amadeusTravelService.searchFlights(request);
        return ResponseEntity.ok(response);
    }

    /**
     * This API is responsible for getting airport with the given keyword
     * @return list of airports
     */
    @PutMapping(path = "/flight/book", produces = "application/json")
    public ResponseEntity<Boolean> bookFlight(@RequestBody BookRequest request) {
        return ResponseEntity.ok(travelService.bookFlights(request));
    }

    /**
     * This API is responsible for saving flight details to itinerary
     */
    @PostMapping(path = "/flight/{username}", produces = "application/json")
    public ResponseEntity<String> addFlight(@PathVariable("username") String userName, @RequestBody AddTravelRequest request) {
        ResponseEntity<String> responseEntity = null;
        try {
            travelService.addFlight(request,userName);
            responseEntity = ResponseEntity.ok("SAVED");
        } catch (ParseException e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }
}
