package com.iu.gobike.controllers;

import com.iu.gobike.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/place")
public class PlaceController {

    @Autowired
    private PlaceService placeService;

    /**
     * This API is responsible for searching place with given input string
     * @return List of places found
     */
    @GetMapping(path = "/search/{str}", produces = "application/json")
    public ResponseEntity<List<String>> search(@PathVariable String str) {
            List<String> places = placeService.search(str);
        return ResponseEntity.ok(places);
    }

}
