package com.iu.gobike.controllers;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.CreateItineraryRequest;
import com.iu.gobike.dto.GetItineraryDetailsResponse;
import com.iu.gobike.dto.UserChatResponse;
import com.iu.gobike.model.SharedChatUser;
import com.iu.gobike.model.User;
import com.iu.gobike.model.UserItinerary;
import com.iu.gobike.repository.ChatRepository;
import com.iu.gobike.repository.UserItineraryRepository;
import com.iu.gobike.repository.UserRepository;
import com.iu.gobike.service.ItineraryService;

import java.util.Optional;

import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.iu.gobike.service.UserChatService;


/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/userchat")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class UserChatController {

	@Autowired
    private UserRepository userRepository;
	
	@Autowired
    private ChatRepository chatRepository;
	
    @Autowired
	private UserChatService userChatService;

	@PostMapping(path = "/{username}/{flag}")
    public ResponseEntity<String> chatstatus(@PathVariable("username") String userName,@PathVariable("flag") Boolean flag) {
        ResponseEntity<String> responseEntity= null;
        try {
        	User user = userRepository.findByUserName(userName);
        	SharedChatUser itinerary = SharedChatUser.builder().chatenable(flag).user(user).build();
//        	System.out.println("itinerary" + itinerary);
            chatRepository.save(itinerary);
            responseEntity = ResponseEntity.ok().build();
        }catch(EntityExistsException e){
            responseEntity = ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage()+" already exists");
        }catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    @GetMapping(path="/{username}", produces = "application/json")
    public ResponseEntity<Boolean> getChatEnableDetails(@PathVariable("username") String username){
        User user = userRepository.findByUserName(username);
        SharedChatUser u = userChatService.getChatStatus(user.getId());
        if( u == null) {
        	return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(u.getChatenable());
 }
}
