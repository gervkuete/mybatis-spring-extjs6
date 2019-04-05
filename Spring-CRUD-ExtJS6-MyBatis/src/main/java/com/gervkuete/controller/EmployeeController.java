package com.gervkuete.controller;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gervkuete.employeeService.EmployeeService;
import com.gervkuete.model.Employee;
import com.gervkuete.model.EmployeeCollection;
import com.gervkuete.model.EmployeeRequest;
import com.gervkuete.model.FormatJSONResponse;
import com.gervkuete.validator.EmployeeValidator;


@RestController
@CrossOrigin(origins = "http://localhost:1841")
public class EmployeeController {
	
	private static Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/loadEmployees")
	public EmployeeCollection showListOfEmployees() {

		logger.info("Requesting all employees");

		List<Employee> listOfEmployees = employeeService.getAllEmployees();
		EmployeeCollection employeeCollection = new EmployeeCollection(true, listOfEmployees);
		return employeeCollection;
	}

	@PostMapping("/deleteEmployee")
	public FormatJSONResponse deleteEmployee(@RequestBody EmployeeRequest employeeModel) {

		logger.info("Request for deleting employee");

		Employee employee = new Employee();
		employee = employeeModel.getEmployee();
		int employee_id = employee.getEmployee_id();
		FormatJSONResponse jsonResponse;
		
		if (employee_id > 0) {	
			employeeService.deleteEmployee(employee_id);
			jsonResponse = new FormatJSONResponse(true, "Employee deleted successfuly");
			
		} else {			
			jsonResponse = new FormatJSONResponse(false, "Failed to delete employee");
		}

		return jsonResponse;
	}

	@PostMapping("/addEmployee")
	public FormatJSONResponse addEmployee(@RequestBody EmployeeRequest employeeModel) {

		logger.info("Request for creating new employee");

		Employee employee = new Employee();
		employee = employeeModel.getEmployee();
		FormatJSONResponse jsonResponse;
		
		if (EmployeeValidator.valid(employee)) {
			employeeService.createEmployee(employee);
			jsonResponse = new FormatJSONResponse(true, "Employee added successfuly");
			
		} else {			
			jsonResponse = new FormatJSONResponse(false, "Failed to add employee");
		}

		return jsonResponse;
	}

	@PostMapping("/updateEmployee")
	public FormatJSONResponse updateEmployee(@RequestBody EmployeeRequest employeeModel) {

		logger.info("Request for updating employee");

		Employee employee = new Employee();
		employee = employeeModel.getEmployee();
		FormatJSONResponse jsonResponse;

		if (employee.getEmployee_id() > 0 && EmployeeValidator.valid(employee)) {			
			employeeService.updateEmployee(employee);
			jsonResponse = new FormatJSONResponse(true, "Employee updated successfuly");
			
		} else {			
			jsonResponse = new FormatJSONResponse(false, "Cannot update employee");
		}

		return jsonResponse;
	}

	
}


