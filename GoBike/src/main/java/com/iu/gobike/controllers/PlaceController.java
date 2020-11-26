package com.iu.gobike.controllers;

import com.iu.gobike.dto.RatingRequest;
import com.iu.gobike.model.Place;
import com.iu.gobike.model.Rating;
import com.iu.gobike.service.PlaceService;
import com.iu.gobike.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/place")
@CrossOrigin(origins = "*")
public class PlaceController {

    @Autowired
    private PlaceService placeService;

    @Autowired
    private RatingService ratingService;

    /**
     * This API is responsible for searching place with given input string
     * @return List of places found
     */
    @GetMapping(path = "/search/{str}", produces = "application/json")
    public ResponseEntity<List<String>> search(@PathVariable String str) {
            List<String> places = placeService.search(str);
        return ResponseEntity.ok(places);
    }

    /**
     * This API is responsible for getting all details for given place name
     * @return Place containing all the information
     */
    @GetMapping(path = "/details/{name}", produces = "application/json")
    public ResponseEntity<Place> details(@PathVariable String name) {
        Place place = placeService.getDetails(name);
        return ResponseEntity.ok(place);
    }

    @PostMapping( produces = "application/json")
    public ResponseEntity<Place> create(@RequestBody Place pla) {
        Place place = placeService.save(pla);
        return ResponseEntity.ok(place);
    }

    @PostMapping(path = "/{name}/rate",produces = "application/json")
    public ResponseEntity<Rating> rate(@PathVariable("name") String placeName, @RequestBody RatingRequest request) {
        Rating rating = ratingService.rate(request);
        return ResponseEntity.ok(rating);
    }

    @GetMapping( produces = "application/json")
    public ResponseEntity<List<Place> > findAll() {
        List<Place> places = placeService.findAll();
        return ResponseEntity.ok(places);
    }

}
