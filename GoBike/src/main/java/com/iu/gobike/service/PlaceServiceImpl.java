package com.iu.gobike.service;

import com.iu.gobike.model.Place;
import com.iu.gobike.repository.PlaceRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @author jbhushan
 */
@Component
@AllArgsConstructor
public class PlaceServiceImpl implements PlaceService{

    @Autowired
    private PlaceRepository placeRepository;

    @Override
    public List<String> search(String searchStr) {
        List<String> places = new ArrayList<String>();
        List<String> result = placeRepository.findAllName(searchStr);
        if (result != null) {
            places.addAll(result);
        }
        return places;
    }

    @Override
    public Place getDetails(String name) {
        return placeRepository.findByName(name);
    }
}
