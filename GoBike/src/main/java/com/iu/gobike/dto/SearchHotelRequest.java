package com.iu.gobike.dto;

import com.iu.gobike.enums.TravelClass;

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
public class SearchHotelRequest {
	    private String destination;
	    private String checkInDate;
	    private String checkOutDate;
	    private int roomqty;
	    private int adults;
	    private int ratings;
	    private String boardType;
	

}
