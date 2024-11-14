import React from 'react';
import { Link } from 'react-router-dom';

const ShowProfile = ({ userShowData }) => {
  if (!userShowData || (!userShowData.user && !userShowData.data)) {
    return <div className="text-center text-gray-500">User data is not available</div>;
  }

  const user = userShowData.user || userShowData.data; // Get user from either object
  const { firstName, lastName, mobileNumber, emailId, images, createdAt } = user || {}; // Fallback if user is undefined

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      {/* Profile Image */}
      <img 
        src={images || 'https://via.placeholder.com/150'} 
        alt={`${firstName || 'User'} ${lastName || ''}`} 
        className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-indigo-500 mb-4" 
      />

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-500">{emailId}</p>
        <p className="text-gray-500">{mobileNumber}</p>
      </div>

      {/* Account Details */}
      <div className="mt-4 text-gray-600 text-sm">
        <p><strong>Account Created:</strong> {new Date(createdAt).toLocaleDateString()}</p>
      </div>

      {/* Edit Profile Button */}
      <Link to='/editProfile'>
        <button className="mt-6 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
          Edit Profile
        </button>
      </Link>
    </div>
  );
};

export default ShowProfile;
