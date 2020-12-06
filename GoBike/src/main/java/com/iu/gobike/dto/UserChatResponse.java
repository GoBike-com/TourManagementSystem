package com.iu.gobike.dto;

import java.util.List;

import com.iu.gobike.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class UserChatResponse {
	
	private Boolean chatflag;
    private User user;

}
