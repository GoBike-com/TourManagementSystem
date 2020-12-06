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
//    @GetMapping(path = "/details/{name}", produces = "application/json")
//    public ResponseEntity<Restaurant> details(@PathVariable String name) {
//        Restaurant restaurant = restaurantService.getDetails(name);
//        return ResponseEntity.ok(restaurant);
//    }

//    @PostMapping( produces = "application/json")
//    public ResponseEntity<Restaurant> create(@RequestBody Restaurant res) {
//        Restaurant restaurant = restaurantService.save(res);
//        return ResponseEntity.ok(restaurant);
//    }

//    @GetMapping( produces = "application/json")
//    public ResponseEntity<List<Restaurant> > findAll() {
//        List<Restaurant> restaurants = restaurantService.findAll();
//        return ResponseEntity.ok(restaurants);
//    }

    @PostMapping(path = "/city/hotels", produces = "application/json")
    public ResponseEntity<List<HotelInfo>> findByLocation(@RequestBody SearchHotelRequest req) {
        List<HotelInfo> hn = restaurantService.searchHotels(req);
        if(hn == null) {
        	return ResponseEntity.ok(null);
        }
        return ResponseEntity.ok(hn);
    }

    @GetMapping(path = "/add")
    public void add() {
//        Restaurant restaurant;
//        Place place;
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Virtue")
//                .place(place)
//                .websiteURL("https://www.virtuerestaurant.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Virtue.jpg")
//                .description("Hearty Southern cooking paired with wines & cocktails in funky-chic quarters with an open kitchen.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Lula Cafe")
//                .place(place)
//                .websiteURL("http://lulacafe.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/LulaCafe.jpg")
//                .description("Inventive, market-driven food in a casual, funky space that hosts an especially popular brunch.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Birrieria Zaragoza")
//                .place(place)
//                .websiteURL("https://www.birrieriazaragoza.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/BirrieriaZaragoza.jpg")
//                .description("Family-run Mexican joint offering comfort food made with goat meat in a cozy, counter-serve setup.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Avec")
//                .place(place)
//                .websiteURL("http://www.avecrestaurant.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Avec.jpeg")
//                .description("Inventive small & large mediterranean plates served in a cozy, minimalist space with communal seating.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Superdawg Drive-In")
//                .place(place)
//                .websiteURL("http://www.superdawg.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Superdawg.jpg")
//                .description("Classic circa-1948 drive-in where car hops deliver Chicago-style dogs, fries & milkshakes.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Giant")
//                .place(place)
//                .websiteURL("https://www.giantrestaurant.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Giant.jpg")
//                .description("Seasonal New American plates & craft cocktails are served in a funky storefront with local art.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Daisies")
//                .place(place)
//                .websiteURL("https://www.daisieschicago.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/Daisies.jpeg")
//                .description("Stylish spot with seasonal pasta & vegetables on the New American menu along with craft cocktails.")
//                .build();
//        restaurantService.save(restaurant);
//
//        place = placeService.getDetails("Chicago");
//        restaurant = Restaurant.builder()
//                .name("Pizza Friendly Pizza")
//                .place(place)
//                .websiteURL("https://www.pizzafriendlypizza.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/PizzaFriendlyPizza.jpg")
//                .description("Serving pizza in a nice cozy setting.")
//                .build();
//        restaurantService.save(restaurant);



        //-----------------------------------------------------



//        Activity activity;
//        Place place;
//        place = placeService.getDetails("Chicago");
//        activity = Activity.builder()
//                .name("360 Chicago Observation Deck")
//                .place(place)
//                .websiteURL("https://360chicago.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/360Chicago.jpg")
//                .columns(2)
//                .description("Observatory on the 94th floor of the John Hancock Building with a tilting glass lookout 1000 feet up.")
//                .build();
//        activityRepository.save(activity);
//
//        place = placeService.getDetails("Chicago");
//        activity = Activity.builder()
//                .name("Architecture River Cruise")
//                .place(place)
//                .websiteURL("https://www.architecture.org/tours/detail/chicago-architecture-foundation-center-river-cruise-aboard-chicago-s-first-lady/")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/RiverCruise.jpg")
//                .columns(1)
//                .description("Explore Chicago's wonderful architectural building designs in style in this river cruise among the First Lady.")
//                .build();
//        activityRepository.save(activity);
//
//        place = placeService.getDetails("Chicago");
//        activity = Activity.builder()
//                .name("Chicago Scavenger Hunt")
//                .place(place)
//                .websiteURL("https://www.scavengerhunt.com/locations/Loop_Chicago_Scavenger_Hunt.html")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/ScavengerHunt.jpg")
//                .columns(1)
//                .description("Explore Chicago and beat the clock in this windy city as you search for the area's best sights.")
//                .build();
//        activityRepository.save(activity);
//
//        place = placeService.getDetails("Chicago");
//        activity = Activity.builder()
//                .name("Gangsters and Ghosts Tour")
//                .place(place)
//                .websiteURL("https://gangstersandghosts.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/GangstersAndGhosts.jpg")
//                .columns(1)
//                .description("Explore Chicago from the perspective of a ghost and a gangster.")
//                .build();
//        activityRepository.save(activity);



        //-----------------------------------------------------



//        Hotel hotel;
//        Place place;
//        place = placeService.getDetails("Chicago");
//        hotel = Hotel.builder()
//                .name("The Langham, Chicago")
//                .place(place)
//                .websiteURL("https://www.langhamhotels.com/en/the-langham/chicago/")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/LanghamChicago.jpg")
//                .description("Set in a Mies van der Rohe landmark tower with sweeping views of Lake Michigan, this contemporary hotel is 0.4 miles from Millennium Park and 0.3 miles from the Millennium Mile.")
//                .build();
//        hotelRepository.save(hotel);
//
//        place = placeService.getDetails("Chicago");
//        hotel = Hotel.builder()
//                .name("Four Seasons Hotel Chicago")
//                .place(place)
//                .websiteURL("https://www.fourseasons.com/chicago/")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/FourSeasons.jpg")
//                .description("In a skyscraper above a shopping mall, this luxury hotel is a 7-minute walk from the Museum of Contemporary Art and 1 mile from Navy Pier.")
//                .build();
//        hotelRepository.save(hotel);
//
//        place = placeService.getDetails("Chicago");
//        hotel = Hotel.builder()
//                .name("Ritz-Carlton Chicago")
//                .place(place)
//                .websiteURL("https://www.ritzcarlton.com/en/hotels/chicago?scid=3f30e674-f00a-4328-b92b-65be23a7dd47&ppc=ppc&pId=ustbppc&nst=paid&gclid=EAIaIQobChMIs9qs_Knf7AIVjYbACh0hkwB_EAAYASAAEgJ9a_D_BwE&gclsrc=aw.ds")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/RitzCarlton.jpeg")
//                .description("On downtown’s Magnificent Mile, this sleek upscale hotel is 4 minutes' walk from the Museum of Contemporary Art and 7 minutes’ walk from the Chicago-Red metro station.")
//                .build();
//        hotelRepository.save(hotel);
//
//        place = placeService.getDetails("Chicago");
//        hotel = Hotel.builder()
//                .name("The Gwen Chicago")
//                .place(place)
//                .websiteURL("https://www.thegwenchicago.com")
//                .imageURL("https://s3.us-east-2.amazonaws.com/gobike.xyz/images/Chicago/GwenChicago.jpg")
//                .description("Featuring a facade with sculpted panels dating from 1929, this upscale, contemporary hotel in the McGraw-Hill Building on the Magnificent Mile is a 3-minute walk from an El station and a 17-minute walk from Millennium Park.")
//                .build();
//        hotelRepository.save(hotel);
    }

}
