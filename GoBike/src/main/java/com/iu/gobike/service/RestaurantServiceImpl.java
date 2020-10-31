package com.iu.gobike.service;

import com.iu.gobike.model.Restaurant;
import com.iu.gobike.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class RestaurantServiceImpl implements RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

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
    public List<Restaurant> findAll() {
        Iterable<Restaurant> r = restaurantRepository.findAll();
        return r != null ? StreamSupport.stream(r.spliterator(), false)
                .collect(Collectors.toList()) : Collections.emptyList();
    }
}
