import React from "react";

const UserDetails = ({ user }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center text-3xl text-gray-600">
        {user.name.charAt(0)}
      </div>
      <h2 className="text-2xl font-bold text-indigo-600">{user.name}</h2>
      <p className="text-gray-500">{user.category}</p>
    </div>

    <div className="mb-6 text-sm">
      <p className="mb-2">
        <span className="font-semibold">Bio:</span> {user.bio}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Contact options:</span>{" "}
        {user.contactOptions}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Links:</span> {user.links}
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-indigo-100 rounded-lg p-2 text-center">
        <p className="text-lg font-bold text-indigo-600">{user.followers}</p>
        <p className="text-xs text-gray-600">Followers</p>
      </div>
      <div className="bg-indigo-100 rounded-lg p-2 text-center">
        <p className="text-lg font-bold text-indigo-600">{user.following}</p>
        <p className="text-xs text-gray-600">Following</p>
      </div>
      <div className="bg-indigo-100 rounded-lg p-2 text-center">
        <p className="text-lg font-bold text-indigo-600">{user.posts}</p>
        <p className="text-xs text-gray-600">Posts</p>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-2">Action buttons:</h3>
      <div className="flex flex-wrap gap-2">
        <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700 transition duration-300">
          Follow
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-300 transition duration-300">
          Message
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition duration-300">
          Share Profile
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-600 transition duration-300">
          Report
        </button>
      </div>
    </div>
  </div>
);

export default UserDetails;
