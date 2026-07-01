package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cognizant.ormlearn.model.Employee;
import org.springframework.data.repository.query.Param;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

	//Simple HQL
	//@Query("SELECT e FROM Employee e WHERE e.permanent = true")
	
	//LEFT JOIN (without FETCH)
	//@Query("SELECT e FROM Employee e LEFT JOIN e.department d LEFT JOIN e.skillList WHERE e.permanent = true")
	
	//LEFT JOIN FETCH (final optimized version)
	@Query("SELECT e FROM Employee e LEFT JOIN FETCH e.department LEFT JOIN FETCH e.skillList WHERE e.permanent = true")
	List<Employee> getAllPermanentEmployees();
	
	@Query("SELECT AVG(e.salary) FROM Employee e WHERE e.department.id = :id")
	double getAverageSalary(@Param("id") int id);
}