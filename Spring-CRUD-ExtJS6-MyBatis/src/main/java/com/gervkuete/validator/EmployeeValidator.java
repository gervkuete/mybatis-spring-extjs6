package com.gervkuete.validator;

import com.gervkuete.model.Employee;

public class EmployeeValidator {

	public static boolean valid(Employee employee) {
		
		if (employee.getFirstName() == null || employee.getFirstName() == "" ||
				employee.getLastName() == null || employee.getLastName() == "" ||
				employee.getEmail() == null || employee.getEmail() == "" ||
				employee.getPhoneNumber() == null || employee.getEmail() == "") {
			
			return false;
		} else {
			return true;
		}
		
	}
	
}
