package com.iu.gobike.util;

import com.iu.gobike.amadeus.model.token.TokenResponse;
import com.iu.gobike.dto.SearchAirportResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

/**
 * This class is responsible foe getting latest access token from amadeus
 *
 * @author jbhushan
 */
@Component
public class AmadeusRestTemplate {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${amadeus.url}")
    private String amadeusUrl;

    private String getToken(){
        MultiValueMap<String, String> parametersMap = new LinkedMultiValueMap<>();
        parametersMap.add("grant_type", "client_credentials");
        parametersMap.add("client_id", "hHcQGeKcQGyAbIQ1qnmFUGVJ67h5gAoA");
        parametersMap.add("client_secret", "eswgNWkoNZm5DtJf");
        ResponseEntity<TokenResponse> responseEntity = restTemplate.postForEntity(amadeusUrl+"v1/security/oauth2/token"
                ,parametersMap,TokenResponse.class);
        return responseEntity.getBody().getAccess_token();
    }

    private HttpEntity<String>  getHttpEntity(){
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.setBearerAuth(getToken());
        HttpEntity<String> entity = new HttpEntity<>(headers);
        return entity;
    }

    /**
     * This method is used for consuming get request from amadeus
     * @param url
     *          Url to consume
     * @param response
     *              response object type
     * @param <T>
     * @return response
     */
    public <T> ResponseEntity<T> get(String url, Class<T> response){
        return restTemplate.exchange(amadeusUrl+url,
                HttpMethod.GET,getHttpEntity(), response);
    }

    public <T> ResponseEntity<T> post(String url, Class<T> response){
        return restTemplate.exchange(amadeusUrl+url,
                HttpMethod.POST,getHttpEntity(), response);
    }
}
