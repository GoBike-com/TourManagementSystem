package com.iu.gobike.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.iu.gobike.dto.UserChatResponse;
import com.iu.gobike.model.SharedChatUser;
import com.iu.gobike.repository.ChatRepository;

@Component
public class UserChatServiceImpl implements UserChatService{
	
    @Autowired
	private UserChatService userChatService;
    
    @Autowired
    private ChatRepository chatrepo;
    
    @Override
	public SharedChatUser getChatStatus(Long id) {
    	ArrayList<SharedChatUser> u = chatrepo.findByUserId(id);
    	if(u.size() == 0) {
    		return null;
    	}
//    	System.out.println("printing the list");
    	
    	int n = u.size();
		return u.get(n - 1);
	}
	
}
