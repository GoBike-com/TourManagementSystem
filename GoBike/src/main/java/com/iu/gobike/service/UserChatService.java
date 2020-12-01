package com.iu.gobike.service;

import java.util.Optional;

import com.iu.gobike.dto.UserChatResponse;
import com.iu.gobike.model.SharedChatUser;

public interface UserChatService {
	SharedChatUser getChatStatus(Long id);
}
