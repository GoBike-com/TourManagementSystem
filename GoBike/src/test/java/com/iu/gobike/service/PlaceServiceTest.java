package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.Place;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.ItineraryPlaceRepository;
import com.iu.gobike.repository.PlaceRepository;
import com.iu.gobike.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * @author jbhushan
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class PlaceServiceTest {

    private PlaceService placeService;

    @Mock
    private PlaceRepository placeRepository;

    @Mock
    private ItineraryPlaceRepository itineraryPlaceRepository;

    private Place place;

    @Before
    public void setUp(){
        placeService = new PlaceServiceImpl(placeRepository,itineraryPlaceRepository);
        place = Place.builder().id(1l).name("boston").country("A").build();
    }

    @Test
    public void search() {
        Mockito.when(placeRepository.findAllName(Mockito.anyString())).thenReturn(List.of("Chicago"));
        List<String> places = placeService.search("ch");
        Assert.assertEquals(1, places.size());
        Assert.assertEquals("Chicago", places.get(0));
    }

    @Test
    public void searchNotFound() {
        Mockito.when(placeRepository.findAllName(Mockito.anyString())).thenReturn(null);
        List<String> places = placeService.search("ch");
        Assert.assertEquals(0,places.size());
    }

    @Test
    public void getDetails() {
        Mockito.when(placeRepository.findByName(Mockito.anyString())).thenReturn(place);
        Place place = placeService.getDetails("boston");
        Assert.assertEquals(1l, place.getId().longValue());
    }

}
