package com.iu.gobike.controllers;

import com.iu.gobike.dto.BookRequest;
import com.iu.gobike.service.AccomodationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/accommodation")
@CrossOrigin(origins = "*")
public class AccomodationController {

    @Autowired
    private AccomodationService accomodationService;

    /**
     * This API is responsible for booking selected accommodation by the user
     * @return list of airports
     */
    @PutMapping(path = "/book", produces = "application/json")
    public ResponseEntity<Boolean> bookFlight(@RequestBody BookRequest request) {
        return ResponseEntity.ok(accomodationService.book(request));
    }

}
