import React from "react";

const UserDetails = ({ user }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
    <p className="mb-2">
      <span className="font-semibold">Category:</span> {user.category}
    </p>
    <p className="mb-2">
      <span className="font-semibold">Bio:</span> {user.bio}
    </p>
    <p className="mb-2">
      <span className="font-semibold">Contact:</span> {user.contactOptions}
    </p>
    <p className="mb-2">
      <span className="font-semibold">Links:</span> {user.links}
    </p>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="text-center">
        <p className="text-xl font-bold">{user.followers}</p>
        <p className="text-gray-600">Followers</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">{user.following}</p>
        <p className="text-gray-600">Following</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">{user.posts}</p>
        <p className="text-gray-600">Posts</p>
      </div>
    </div>
  </div>
);

export default UserDetails;
