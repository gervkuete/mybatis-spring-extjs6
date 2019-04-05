package com.gervkuete.model;

import java.util.List;

public class EmployeeCollection {

	private boolean success;
	private List<Employee> employees;

	public EmployeeCollection(boolean success, List<Employee> employees) {
		super();
		this.success = success;
		this.employees = employees;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
}
