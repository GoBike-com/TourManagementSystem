package com.iu.gobike.controllers;

import com.iu.gobike.dto.HotelInfo;
import com.iu.gobike.dto.SearchHotelRequest;
import com.iu.gobike.model.Activity;
import com.iu.gobike.model.Hotel;
import com.iu.gobike.model.Place;
import com.iu.gobike.model.Restaurant;
import com.iu.gobike.repository.ActivityRepository;
import com.iu.gobike.repository.HotelRepository;
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
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private PlaceService placeService;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private HotelRepository hotelRepository;

    /**
     * This API is responsible for getting all details for given restaurant name
     * @return Restaurant containing all the information
     */


    @PostMapping(path = "/city/hotels", produces = "application/json")
    public ResponseEntity<List<HotelInfo>> findByLocation(@RequestBody SearchHotelRequest req) {
        List<HotelInfo> hn = restaurantService.searchHotels(req);
        if(hn == null) {
        	return ResponseEntity.ok(null);
        }
        return ResponseEntity.ok(hn);
    }

   
}
