import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PostAnalytics = ({ posts }) => {
  const data = posts.map((post) => ({
    content: post.content.substring(0, 10) + "...",
    likes: post.likes,
    comments: post.comments,
    shares: post.shares,
    saves: post.saves,
  }));

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">
        Post Analytics
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="content"
            interval="preserveStartEnd"
            tick={{ fontSize: 12 }}
          />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="likes" fill="#8884d8" />
          <Bar dataKey="comments" fill="#82ca9d" />
          <Bar dataKey="shares" fill="#ffc658" />
          <Bar dataKey="saves" fill="#ff7300" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostAnalytics;
