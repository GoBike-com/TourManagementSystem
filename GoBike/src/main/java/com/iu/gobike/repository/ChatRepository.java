package com.iu.gobike.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.iu.gobike.model.SharedChatUser;
import com.iu.gobike.model.UserItinerary;

@Repository
public interface ChatRepository extends CrudRepository<SharedChatUser, Long>{
	ArrayList<SharedChatUser> findByUserId(Long userId);
}
