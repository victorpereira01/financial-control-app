package com.victorpereira.financialcontrol.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.victorpereira.financialcontrol.models.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{

	
	@Transactional(readOnly = true)
	@Query("SELECT obj FROM Transaction obj WHERE obj.user.id = :userId ORDER BY obj.id DESC")
	public List<Transaction> findTransactions(@Param("userId")Integer user_Id);
}
