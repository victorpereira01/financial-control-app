package com.victorpereira.financialcontrol.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victorpereira.financialcontrol.models.Transaction;
import com.victorpereira.financialcontrol.models.User;
import com.victorpereira.financialcontrol.repositories.TransactionRepository;
import com.victorpereira.financialcontrol.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private TransactionRepository transactionRepo;
	
	public List<User> findAll() {
		return userRepo.findAll();
	}
	
	public User findById(Integer id) {
		return userRepo.findById(id).orElseThrow();
	}
	
	public User insert(User user) {
		return userRepo.save(user);
	}
	
	public User update(User user, Integer id) {
		User usr = findById(id);
		updateData(user, usr);
		return userRepo.save(usr);
	}
	
	public void delete(Integer id) {
		userRepo.delete(findById(id));
	}
	
	public List<Transaction> findUserTransactions(Integer id) {
		return transactionRepo.findTransactions(id);
	}
	
	public Transaction insertTransaction(Transaction transaction, Integer id) {
		User usr = findById(id);
		
		// update user's data and save
		addOrWithdraw(usr, transaction.getValue());
		insert(usr);
		
		transaction.setUser(usr);
		return transactionRepo.save(transaction);
	}
	
	public void deleteTransaction(Integer userId, Integer transactionId) {
		List<Transaction> transactions = findUserTransactions(userId);
		findTransactionAndDelete(transactions, transactionId);
	}
	
	// copies a user data to another, the first argument is the one to be copied, the second is the receiver
	private void updateData(User user, User usr) {
		usr.setBalance(user.getBalance());
		usr.setRevenue(user.getRevenue());
		usr.setExpenses(user.getExpenses());
	}
	
	// add or withdraw value from a user
	// if value is positive it adds to balance and revenue
	// if value is negative it removes from the balance and adds to expenses
	private void addOrWithdraw(User user, Double value) {
		if (value > 0) {
			user.setBalance(user.getBalance() + value);
			user.setRevenue(user.getRevenue() + value);
		} else {
			user.setBalance(user.getBalance() + value);
			user.setExpenses(user.getExpenses() - value);
		}
	}
	
	// find and delete a transaction in a list of transactions
	private void findTransactionAndDelete(List<Transaction> transactions, Integer id) {
		for(Transaction tr : transactions) {
			if(tr.getId() == id) {
				transactionRepo.deleteById(id);
			} 
		}
	}
}
