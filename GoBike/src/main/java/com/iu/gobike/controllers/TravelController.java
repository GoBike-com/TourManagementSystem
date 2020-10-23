package com.iu.gobike.controllers;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/travel")
public class TravelController {

    @Autowired
    private TravelService travelService;

    /**
     * This API is responsible for getting airport with the given keyword
     * @return list of airports
     */
    @GetMapping(path = "/airport/search/{keyword}", produces = "application/json")
    public ResponseEntity<SearchAirportResponse> airport(@PathVariable("keyword") String keyword) {
        return travelService.searchAirports(keyword);
    }
}
