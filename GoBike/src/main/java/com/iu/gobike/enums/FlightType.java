package com.iu.gobike.enums;

public enum FlightType {
    TRAVEL("travel"),
    RETURN("return");

    private String value;
    FlightType(String value){
        this.value = value;
    }
}
