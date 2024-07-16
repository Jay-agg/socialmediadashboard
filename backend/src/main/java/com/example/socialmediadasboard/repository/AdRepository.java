package com.example.socialmediadasboard.repository;

import com.example.socialmediadasboard.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdRepository extends JpaRepository<Ad, Long> {
    List<Ad> findByUserId(Long userId);
}