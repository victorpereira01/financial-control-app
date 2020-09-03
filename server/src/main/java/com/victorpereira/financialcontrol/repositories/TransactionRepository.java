package com.victorpereira.financialcontrol.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victorpereira.financialcontrol.models.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{

}
