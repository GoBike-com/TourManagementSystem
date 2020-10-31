package com.iu.gobike.controllers;

import com.iu.gobike.model.Place;
import com.iu.gobike.model.Restaurant;
import com.iu.gobike.repository.RestaurantRepository;
import com.iu.gobike.service.PlaceService;
import com.iu.gobike.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/restaurant")
@CrossOrigin(origins = "*")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private PlaceService placeService;

    /**
     * This API is responsible for getting all details for given restaurant name
     * @return Restaurant containing all the information
     */
    @GetMapping(path = "/details/{name}", produces = "application/json")
    public ResponseEntity<Restaurant> details(@PathVariable String name) {
        Restaurant restaurant = restaurantService.getDetails(name);
        return ResponseEntity.ok(restaurant);
    }

    @PostMapping( produces = "application/json")
    public ResponseEntity<Restaurant> create(@RequestBody Restaurant res) {
        Restaurant restaurant = restaurantService.save(res);
        return ResponseEntity.ok(restaurant);
    }

    @GetMapping( produces = "application/json")
    public ResponseEntity<List<Restaurant> > findAll() {
        List<Restaurant> restaurants = restaurantService.findAll();
        return ResponseEntity.ok(restaurants);
    }

    @GetMapping(path = "/city/{name}", produces = "application/json")
    public ResponseEntity<List<Restaurant>> findByLocation(@PathVariable String name) {
        List<Restaurant> restaurants = restaurantService.findByCity(name);
        return ResponseEntity.ok(restaurants);
    }

}
