package com.victorpereira.financialcontrol.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.victorpereira.financialcontrol.models.User;
import com.victorpereira.financialcontrol.repositories.UserRepository;

@RestController
@RequestMapping(value="/users")
public class UserResource {
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping
	public List<User> findAll() {
		return userRepo.findAll();
	}
	
	@GetMapping(value="/{id}")
	public User findById(@PathVariable Integer id) {
		return userRepo.findById(id).orElseThrow();
	}

	@PostMapping
	public User insert(@RequestBody User user) {
		return userRepo.save(user);
	}
	
	@PutMapping(value="/{id}")
	public User update(@RequestBody User user, @PathVariable Integer id) {
		User usr = findById(id);
		usr.setBalance(user.getBalance());
		usr.setRevenue(user.getRevenue());
		usr.setExpenses(user.getExpenses());
		return userRepo.save(usr);
	}
	
	@DeleteMapping(value="/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Integer id) {
		userRepo.delete(findById(id));
	}
}
