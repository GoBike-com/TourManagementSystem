package com.iu.gobike.controllers;

import com.iu.gobike.dto.BookFlightRequest;
import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.service.AmadeusTravelService;
import com.iu.gobike.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Boolean> bookFlight(@RequestBody BookFlightRequest request) {
        return ResponseEntity.ok(travelService.bookFlights(request));
    }
}
