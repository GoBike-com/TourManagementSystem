package com.iu.gobike.service;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
//import com.iu.gobike.amadeus.dto.SearchFlightAmadeusResponse;
import com.iu.gobike.amadeus.dto.SearchHotelAmadeusResponse;
//import com.iu.gobike.amadeus.helper.AmadeusHelper;
import com.iu.gobike.dto.HotelInfo;
import com.iu.gobike.dto.SearchFlightRequest;
// import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.dto.SearchHotelRequest;
import com.iu.gobike.dto.SearchHotelResponse;
import com.iu.gobike.model.Hotel;
import com.iu.gobike.model.Restaurant;
import com.iu.gobike.repository.RestaurantRepository;
import com.iu.gobike.util.AmadeusRestTemplate;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class RestaurantServiceImpl implements RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;
    
    @Autowired
    AmadeusRestTemplate amadeusRestTemplate;

    @Override
    public Restaurant getDetails(String name) {
        return restaurantRepository.findByName(name);
    }

    @Override
    public Restaurant save(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }
    
    @Override
    public List<Restaurant> findByCity(String cityName) {
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        List<Restaurant> result = restaurantRepository.findAllInCity(cityName);
        if (result != null) {
            restaurants.addAll(result);
        }
        return restaurants;
    }
    
    @Override
    public List<HotelInfo> searchHotels(SearchHotelRequest request) {
        String url = "v2/shopping/hotel-offers?currencyCode=USD&cityCode=" + request.getDestination() +
             "&checkInDate=" + request.getCheckInDate() +  "&checkOutDate=" + request.getCheckOutDate() +
                "&roomQuantity=" + request.getRoomqty()+"&adults="+request.getAdults()+"&ratings="+request.getRatings()
                + "&boardType=" + request.getBoardType();
//        String returnDate = request.getReturnDate();
//        if(returnDate!=null){
//            url = url+"&returnDate="+returnDate;
//        }
        ResponseEntity<SearchHotelAmadeusResponse> r = amadeusRestTemplate.get(url, SearchHotelAmadeusResponse.class);
//        System.out.println(r.getBody());
        

        
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String newstr = "";
        JSONObject json = null;
        try {
        	newstr = ow.writeValueAsString(r.getBody()); 
        	JSONParser parser = new JSONParser();
            json = (JSONObject) parser.parse(newstr);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
       
        
        JSONArray tot = (JSONArray) json.get("data");
//        System.out.println(tot);
        List<HotelInfo> hf = new ArrayList<HotelInfo>();
        for (int i = 0 ; i < tot.size(); i++) {
        	HotelInfo hi = new HotelInfo();
            JSONObject obj = (JSONObject) tot.get(i);
            JSONObject A = (JSONObject) obj.get("hotel");
            JSONArray B = (JSONArray) obj.get("offers");
            String rates = "";
         
                JSONObject obj1 = (JSONObject) B.get(0);
                String checkoutdate = (String) obj1.get("checkOutDate");
                String checkindate = (String) obj1.get("checkInDate");
                JSONObject amount = (JSONObject)obj1.get("price");
                rates = (String)amount.get("total");
                System.out.println(checkoutdate);
                System.out.println(checkindate);

            
            JSONObject contact = (JSONObject)A.get("contact");
            String phoneNumber = (String) contact.get("phone");
            System.out.println("phoneNumber " + phoneNumber);
            String chaincode = (String)A.get("chainCode");
            String hotelname = (String) A.get("name");
            JSONObject address = (JSONObject) A.get("address");
            String cityName = (String) address.get("cityName");
            String postalCode = (String) address.get("postalCode");
            String countryCode = (String) address.get("countryCode");
            String stateCode = (String) address.get("stateCode");
            
            JSONArray lines = (JSONArray) address.get("lines");
            String street = (String)lines.get(0);
            String completeaddress = street + " " + cityName + " " + postalCode + " " + countryCode + " " + stateCode;
            System.out.println(completeaddress);
            String rating = (String)A.get("rating");
            System.out.println(hotelname);
            System.out.println(cityName);
            System.out.println(postalCode);
            System.out.println(rating);
            hi.setName(hotelname);
            hi.setAddress(completeaddress);
            hi.setPostalCode(postalCode);
            hi.setRating(rating);
            hi.setPhonenumber(phoneNumber);
            hi.setChaincode(chaincode);
            hi.setAmount(rates);
            if(hi == null) {
            	return null;
            }
            hf.add(hi);
        }

        return hf;
     
    }

    @Override
    public List<Restaurant> findAll() {
        Iterable<Restaurant> r = restaurantRepository.findAll();
        return r != null ? StreamSupport.stream(r.spliterator(), false)
                .collect(Collectors.toList()) : Collections.emptyList();
    }
}
