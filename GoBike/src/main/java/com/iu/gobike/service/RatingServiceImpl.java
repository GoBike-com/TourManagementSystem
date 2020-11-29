package com.iu.gobike.service;

import com.iu.gobike.dto.RatingRequest;
import com.iu.gobike.model.Place;
import com.iu.gobike.model.Rating;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.PlaceRepository;
import com.iu.gobike.repository.RatingRepository;
import com.iu.gobike.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author jbhushan
 */
@Component
public class RatingServiceImpl implements RatingService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlaceRepository placeRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public Rating rate(RatingRequest request) {
        User user = userRepository.findByUserName(request.getUserName());
        Place place = placeRepository.findByName(request.getPlace());
        float total = place.getRatings() * place.getRatingsCount();
        place.setRatingsCount(place.getRatingsCount()+1);
        place.setRatings((total+request.getRating())/place.getRatingsCount());
        Rating rating = Rating.builder().place(place).user(user).ratings(request.getRating())
                .createdBy(request.getUserName()).modifiedBy(request.getUserName()).build();
        rating = ratingRepository.save(rating);
        return rating;
    }
}
