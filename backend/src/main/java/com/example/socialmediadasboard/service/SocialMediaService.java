package com.example.socialmediadasboard.service;

import com.example.socialmediadasboard.model.Ad;
import com.example.socialmediadasboard.model.Post;
import com.example.socialmediadasboard.model.User;
import com.example.socialmediadasboard.repository.AdRepository;
import com.example.socialmediadasboard.repository.PostRepository;
import com.example.socialmediadasboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocialMediaService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PostRepository postRepository;
    
    @Autowired
    private AdRepository adRepository;
    
    public User getUserDetails(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }
    
    public List<Post> getUserPosts(Long userId) {
        return postRepository.findByUserId(userId);
    }
    
    public List<Ad> getUserAds(Long userId) {
        return adRepository.findByUserId(userId);
    }
}