package com.victorpereira.financialcontrol.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="tb_user")
@Data
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Double balance; 

	private Double revenue;
	
	private Double expenses;
	
	@OneToMany(mappedBy = "user")
	private List<Transaction> transactions;

	public User(Integer id, Double balance, Double revenue, Double expenses) {
		this.id = id;
		this.balance = balance;
		this.revenue = revenue;
		this.expenses = expenses;
	}
}
