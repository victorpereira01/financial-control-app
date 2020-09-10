package com.victorpereira.financialcontrol.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victorpereira.financialcontrol.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	public User findByEmail(String email);
}
