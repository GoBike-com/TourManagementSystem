package com.iu.gobike.service;

import com.iu.gobike.dto.RatingRequest;
import com.iu.gobike.model.Place;
import com.iu.gobike.model.Rating;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.PlaceRepository;
import com.iu.gobike.repository.RatingRepository;
import com.iu.gobike.repository.UserRepository;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.money.CurrencyUnit;
import javax.money.Monetary;
import javax.money.MonetaryAmount;
import javax.money.NumberValue;
import javax.money.convert.CurrencyConversion;
import javax.money.convert.ExchangeRate;
import javax.money.convert.ExchangeRateProvider;
import javax.money.convert.MonetaryConversions;
import java.util.Currency;

/**
 * @author jbhushan
 */
@Component
public class CurrencyServiceImpl implements CurrencyService{


    @Override
    public Double convert(String base, String target,Double amount) {

        // get a specific ExchangeRateProvider
        ExchangeRateProvider ecbExchangeRateProvider = MonetaryConversions.getExchangeRateProvider("IMF");
        // get the CurrencyConversion from a specific provider
        CurrencyConversion converesion = ecbExchangeRateProvider.getCurrencyConversion(target);
        MonetaryAmount baseAmount = Money.of(amount, base);
        // convert
        MonetaryAmount inDollar = baseAmount.with(converesion);//(at the time writing)
        System.out.println(inDollar);
        return  inDollar.getNumber().doubleValue();
    }
}
