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

    @GetMapping(path = "/add")
    public void add() {
        Restaurant restaurant;
        Place place;
        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Virtue")
                .place(place)
                .websiteURL("https://www.virtuerestaurant.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Virtue.jpg")
                .description("Hearty Southern cooking paired with wines & cocktails in funky-chic quarters with an open kitchen.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Lula Cafe")
                .place(place)
                .websiteURL("http://lulacafe.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/LulaCafe.jpg")
                .description("Inventive, market-driven food in a casual, funky space that hosts an especially popular brunch.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Birrieria Zaragoza")
                .place(place)
                .websiteURL("https://www.birrieriazaragoza.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/BirrieriaZaragoza.jpg")
                .description("Family-run Mexican joint offering comfort food made with goat meat in a cozy, counter-serve setup.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Avec")
                .place(place)
                .websiteURL("http://www.avecrestaurant.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Avec.jpeg")
                .description("Inventive small & large mediterranean plates served in a cozy, minimalist space with communal seating.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Superdawg Drive-In")
                .place(place)
                .websiteURL("http://www.superdawg.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Superdawg.jpg")
                .description("Classic circa-1948 drive-in where car hops deliver Chicago-style dogs, fries & milkshakes.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Giant")
                .place(place)
                .websiteURL("https://www.giantrestaurant.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Giant.jpg")
                .description("Seasonal New American plates & craft cocktails are served in a funky storefront with local art.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Daisies")
                .place(place)
                .websiteURL("https://www.daisieschicago.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Daisies.jpeg")
                .description("Stylish spot with seasonal pasta & vegetables on the New American menu along with craft cocktails.")
                .build();
        restaurantService.save(restaurant);

        place = placeService.getDetails("Chicago");
        restaurant = Restaurant.builder()
                .name("Pizza Friendly Pizza")
                .place(place)
                .websiteURL("https://www.pizzafriendlypizza.com")
                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/PizzaFriendlyPizza.jpg")
                .description("Serving pizza in a nice cozy setting.")
                .build();
        restaurantService.save(restaurant);
    }

}
