// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import PostAnalytics from "./PostAnalytics";
import AdAnalytics from "./AdAnalytics";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1;
        const userResponse = await axios.get(`/api/user/${userId}`);
        const postsResponse = await axios.get(`/api/user/${userId}/posts`);
        const adsResponse = await axios.get(`/api/user/${userId}/ads`);

        setUser(userResponse.data);
        setPosts(postsResponse.data);
        setAds(adsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Social Media Analytics Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {user && <UserDetails user={user} />}
        {posts.length > 0 && <PostAnalytics posts={posts} />}
        {ads.length > 0 && <AdAnalytics ads={ads} />}
      </div>
    </div>
  );
};

export default Dashboard;
