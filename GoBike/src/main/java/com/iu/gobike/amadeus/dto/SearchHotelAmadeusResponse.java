package com.iu.gobike.amadeus.dto;

import java.util.List;

import org.json.simple.JSONObject;

import com.iu.gobike.amadeus.model.travel.Dictionary;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class SearchHotelAmadeusResponse {
	 	private List<JSONObject> data;
}
