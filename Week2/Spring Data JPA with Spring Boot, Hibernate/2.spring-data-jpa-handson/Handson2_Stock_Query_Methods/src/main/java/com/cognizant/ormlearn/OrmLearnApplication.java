package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

import java.time.LocalDate;

import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.repository.StockRepository;
import java.math.BigDecimal;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;
    private static StockRepository stockRepository;

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);
        stockRepository = context.getBean(StockRepository.class);

        LOGGER.info("Inside main");
        
        //testAddCountry();
        //testGetAllCountries();
        //testFindCountryByCode();

        //testSearchCountry();
        //testSearchCountrySorted();
        //testSearchCountryStartingWith();
        
        //testFacebookSeptember();
        //testGoogleStock();
        //testTop3Volume();
      testNetflixLowest();

    }

    // ---------------------- Previous Hands-on ----------------------

    private static void testAddCountry() {

        LOGGER.info("Start");

        Country country = new Country();
        country.setCode("NP");
        country.setName("Nepal");

        countryService.addCountry(country);

        try {
            Country newCountry = countryService.findCountryByCode("NP");
            LOGGER.debug("Country={}", newCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("End");
    }

    private static void testGetAllCountries() {

        LOGGER.info("Start");

        List<Country> countries = countryService.getAllCountries();

        LOGGER.debug("Countries={}", countries);

        LOGGER.info("End");
    }

    private static void testFindCountryByCode() {

        LOGGER.info("Start");

        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country={}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("End");
    }
    
    // Query Method 1
    // Search countries containing "ou"

    private static void testSearchCountry() {

        LOGGER.info("Start");

        List<Country> countries = countryService.searchCountries("ou");

        for (Country country : countries) {
            LOGGER.debug("Country={}", country);
        }
        LOGGER.info("End");
    }

    // Query Method 2
    // Search countries containing "ou" in ascending order

    private static void testSearchCountrySorted() {

        LOGGER.info("Start");

        List<Country> countries = countryService.searchCountriesSorted("ou");

        for (Country country : countries) {
            LOGGER.debug("Country={}", country);
        }

        LOGGER.info("End");
    }

    // Query Method 3
    // Search countries starting with "Z"

    private static void testSearchCountryStartingWith() {

        LOGGER.info("Start");

        List<Country> countries = countryService.searchCountriesStartingWith("Z");

        for (Country country : countries) {
            LOGGER.debug("Country={}", country);
        }

        LOGGER.info("End");
    }
   // Stock Query Methods
    
    private static void testFacebookSeptember() {

        LOGGER.info("Start");

        List<Stock> stocks = stockRepository.findByCodeAndDateBetween(
                "FB",
                LocalDate.of(2019, 9, 1),
                LocalDate.of(2019, 9, 30));

        for (Stock stock : stocks) {
            LOGGER.debug("Stock={}", stock);
        }

        LOGGER.info("End");
    }
    
    private static void testGoogleStock() {

        LOGGER.info("Start");

        List<Stock> stocks = stockRepository.findByCodeAndCloseGreaterThan(
                "GOOGL",
                new BigDecimal("1250"));

        for (Stock stock : stocks) {
            LOGGER.debug("Stock={}", stock);
        }

        LOGGER.info("End");
    }
    
    private static void testTop3Volume() {

        LOGGER.info("Start");

        List<Stock> stocks = stockRepository.findTop3ByOrderByVolumeDesc();

        for (Stock stock : stocks) {
            LOGGER.debug("Stock={}", stock);
        }

        LOGGER.info("End");
    }
    
    private static void testNetflixLowest() {

        LOGGER.info("Start");

        List<Stock> stocks = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");

        for (Stock stock : stocks) {
            LOGGER.debug("Stock={}", stock);
        }

        LOGGER.info("End");
    }
}