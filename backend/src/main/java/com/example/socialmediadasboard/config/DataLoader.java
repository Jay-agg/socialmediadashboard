package com.example.socialmediadasboard.config;

import com.example.socialmediadasboard.model.Ad;
import com.example.socialmediadasboard.model.Post;
import com.example.socialmediadasboard.model.User;
import com.example.socialmediadasboard.repository.AdRepository;
import com.example.socialmediadasboard.repository.PostRepository;
import com.example.socialmediadasboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PostRepository postRepository;
    
    @Autowired
    private AdRepository adRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Create dummy users, posts, and ads
        User user = new User();
        user.setName("John Doe");
        user.setCategory("Influencer");
        user.setBio("Social media enthusiast");
        user.setContactOptions("email@example.com");
        user.setLinks("https://example.com");
        user.setFollowers(1000);
        user.setFollowing(500);
        user.setPosts(50);
        userRepository.save(user);
        
        Post post = new Post();
        post.setUserId(user.getId());
        post.setContent("Check out my new post!");
        post.setLikes(100);
        post.setComments(20);
        post.setShares(10);
        post.setSaves(5);
        postRepository.save(post);
        
        Ad ad = new Ad();
        ad.setUserId(user.getId());
        ad.setTitle("Promote your brand");
        ad.setReach(5000);
        ad.setEngagement(500);
        ad.setActive(true);
        adRepository.save(ad);
    }
}