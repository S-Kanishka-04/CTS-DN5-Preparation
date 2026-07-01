package com.cognizant.ormlearn.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Stock;
import java.math.BigDecimal;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

	// 1. Facebook stocks in September 2019
	List<Stock> findByCodeAndDateBetween(String code, LocalDate startDate, LocalDate endDate);

	// 2. Google stocks where closing price > 1250
	List<Stock> findByCodeAndCloseGreaterThan(String code, BigDecimal close);

	// 3. Top 3 highest volume
	List<Stock> findTop3ByOrderByVolumeDesc();

	// 4. Lowest 3 Netflix stock prices
	List<Stock> findTop3ByCodeOrderByCloseAsc(String code);
}