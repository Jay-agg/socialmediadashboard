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
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Social Media Analytics Dashboard
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            {user && <UserDetails user={user} />}
          </div>
          <div className="lg:col-span-2 space-y-8">
            {posts.length > 0 && <PostAnalytics posts={posts} />}
            {ads.length > 0 && <AdAnalytics ads={ads} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
