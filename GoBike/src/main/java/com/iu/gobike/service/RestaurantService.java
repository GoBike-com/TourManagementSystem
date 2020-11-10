package com.iu.gobike.service;

import com.iu.gobike.dto.HotelInfo;
// import com.iu.gobike.dto.SearchFlightRequest;
// import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.dto.SearchHotelRequest;
import com.iu.gobike.dto.SearchHotelResponse;
import com.iu.gobike.model.Restaurant;

import java.util.List;

/**
 * @author woboland
 */
public interface RestaurantService {
    Restaurant getDetails(String name);

    List<Restaurant> findByCity(String cityName);

    Restaurant save(Restaurant restaurant);

    List<Restaurant> findAll();
    
    List<HotelInfo> searchHotels(SearchHotelRequest request);

//	List<Restaurant> searchHotels(SearchHotelRequest req);

}
