package com.iu.gobike.service;

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
}
