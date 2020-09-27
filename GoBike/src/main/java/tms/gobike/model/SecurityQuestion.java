package tms.gobike.model;

import lombok.Getter;
import lombok.Setter;

/**
 * @author jbhushan
 */
public enum SecurityQuestion {

    Mother_maiden_name(1, "What is your mother maiden name?"),
    Favourite_city(2, "What is your favourite city?"),
    Favourite_food(3, "What is your favourite food?"),
    Favourite_color(4, "What is your favourite color?"),
    Pincode(5, "What is your pincode?");

    @Getter
    int id;
    @Getter
    String value;
    SecurityQuestion(int id, String value){
        this.id=id;
        this.value = value;
    }
    public static SecurityQuestion getIdByValue(int id){
        switch(id) {
            case 1:
                return SecurityQuestion.Mother_maiden_name;
            case 2:
                return SecurityQuestion.Favourite_city;
            case 3:
                return SecurityQuestion.Favourite_food;
            case 4:
                return SecurityQuestion.Favourite_color;
            case 5:
                return SecurityQuestion.Pincode;
            default:
                throw new IllegalArgumentException();
        }
    }
}
