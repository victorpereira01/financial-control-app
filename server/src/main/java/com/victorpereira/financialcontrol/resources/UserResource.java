package com.victorpereira.financialcontrol.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.victorpereira.financialcontrol.models.Transaction;
import com.victorpereira.financialcontrol.models.User;
import com.victorpereira.financialcontrol.repositories.TransactionRepository;
import com.victorpereira.financialcontrol.repositories.UserRepository;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private TransactionRepository transactionRepo;

	@GetMapping
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@CrossOrigin
	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Integer id) {
		return userRepo.findById(id).orElseThrow();
	}

	@CrossOrigin
	@PostMapping
	public User insert(@RequestBody User user) {
		return userRepo.save(user);
	}

	@PutMapping(value = "/{id}")
	public User update(@RequestBody User user, @PathVariable Integer id) {
		User usr = findById(id);
		usr.setBalance(user.getBalance());
		usr.setRevenue(user.getRevenue());
		usr.setExpenses(user.getExpenses());
		return userRepo.save(usr);
	}
	
	@CrossOrigin
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		userRepo.delete(findById(id));
	}

	// nested endpoint that return all transaction from a user
	@CrossOrigin
	@GetMapping(value = "/{id}/transactions")
	public List<Transaction> findTransactions(@PathVariable Integer id) {
		return transactionRepo.findTransactions(id);
	}
	
	// nested endpoint to create a transaction from a user
	@CrossOrigin
	@PostMapping(value = "/{id}/transactions")
	public Transaction insertTransaction(@PathVariable Integer id, @RequestBody Transaction transaction) {
		transaction.setUser(findById(id));
		return transactionRepo.save(transaction);
	}
	
	// nested endpoint to delete a transaction from a user
	@CrossOrigin
	@DeleteMapping(value = "/{id}/transactions/{transactionId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteTransaction(@PathVariable Integer id, @PathVariable Integer transactionId) {
		List<Transaction> transactions = transactionRepo.findTransactions(id);
		
		for(Transaction tr : transactions) {
			if(tr.getId() == transactionId) {
				transactionRepo.deleteById(transactionId);
			} 
		}
	}
}
