package com.example.socialmediadasboard.repository;

import com.example.socialmediadasboard.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // No need to define findById as it's already provided by JpaRepository
}