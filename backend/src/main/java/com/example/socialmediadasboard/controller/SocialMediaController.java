package com.example.socialmediadasboard.controller;

import com.example.socialmediadasboard.model.Ad;
import com.example.socialmediadasboard.model.Post;
import com.example.socialmediadasboard.model.User;
import com.example.socialmediadasboard.service.SocialMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SocialMediaController {
    @Autowired
    private SocialMediaService socialMediaService;
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserDetails(@PathVariable Long userId) {
        User user = socialMediaService.getUserDetails(userId);
        return ResponseEntity.ok(user);
    }
    
    @GetMapping("/user/{userId}/posts")
    public ResponseEntity<List<Post>> getUserPosts(@PathVariable Long userId) {
        List<Post> posts = socialMediaService.getUserPosts(userId);
        return ResponseEntity.ok(posts);
    }
    
    @GetMapping("/user/{userId}/ads")
    public ResponseEntity<List<Ad>> getUserAds(@PathVariable Long userId) {
        List<Ad> ads = socialMediaService.getUserAds(userId);
        return ResponseEntity.ok(ads);
    }
    
    // Add more endpoints as needed
}