package com.iu.gobike.controllers;

import com.iu.gobike.dto.CurrencyConversionRequest;
import com.iu.gobike.model.SharedChatUser;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.ChatRepository;
import com.iu.gobike.repository.UserRepository;
import com.iu.gobike.service.CurrencyService;
import com.iu.gobike.service.UserChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;


/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/currency")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class CurrencyController {

	@Autowired
    private CurrencyService currencyService;

	@PostMapping(path = "/convert")
    public ResponseEntity<Double> convert(@RequestBody CurrencyConversionRequest request) {
        Double amount = currencyService.convert(request.getBaseCurrency(), request.getTargetCurrency(), request.getAmount());
        return ResponseEntity.ok(amount);
    }
}
