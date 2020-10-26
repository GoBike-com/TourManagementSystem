package com.iu.gobike.service;

import com.iu.gobike.model.Place;

import java.util.List;

/**
 * @author jbhushan
 */
public interface PlaceService {

    List<String> search(String searchStr);

    Place getDetails(String name);

    Place save(Place place);

    List<Place> findAll();
}
