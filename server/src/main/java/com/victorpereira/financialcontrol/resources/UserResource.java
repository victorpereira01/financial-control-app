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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.victorpereira.financialcontrol.models.Transaction;
import com.victorpereira.financialcontrol.models.User;
import com.victorpereira.financialcontrol.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserResource {
	
	@Autowired
	private UserService userService;
	
	
	@GetMapping
	public List<User> findAll() {
		return userService.findAll();
	}

	@CrossOrigin
	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Integer id) {
		return userService.findById(id);
	}
	
	@CrossOrigin
	@GetMapping(value= "/email")
	public User findByEmail(@RequestParam(value="value") String email) {
		return userService.findByEmail(email);
	}

	@CrossOrigin
	@PostMapping
	public User insert(@RequestBody User user) {
		return userService.insert(user);
	}

	@PutMapping(value = "/{id}")
	public User update(@RequestBody User user, @PathVariable Integer id) {
		return userService.update(user, id);
	}
	
	@CrossOrigin
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		userService.delete(id);
	}

	// nested endpoint that return all transaction from a user
	@CrossOrigin
	@GetMapping(value = "/{id}/transactions")
	public List<Transaction> findUserTransactions(@PathVariable Integer id) {
		return userService.findUserTransactions(id);
	}
	
	// nested endpoint to create a transaction from a user
	@CrossOrigin
	@PostMapping(value = "/{id}/transactions")
	public Transaction insertTransaction(@RequestBody Transaction transaction, @PathVariable Integer id) {
		return userService.insertTransaction(transaction, id);
	}
	
	// nested endpoint to delete a transaction from a user
	@CrossOrigin
	@DeleteMapping(value = "/{id}/transactions/{transactionId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteTransaction(@PathVariable Integer id, @PathVariable Integer transactionId) {
		userService.deleteTransaction(id, transactionId);
	}
}