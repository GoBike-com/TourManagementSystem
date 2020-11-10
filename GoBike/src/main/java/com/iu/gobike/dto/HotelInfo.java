package com.iu.gobike.dto;

import java.sql.Timestamp;

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
public class HotelInfo {
	private String amount;
    private String name;
    private String address;
    private String postalCode;
    private String rating;
    private String phonenumber;
    private String chaincode;
}
