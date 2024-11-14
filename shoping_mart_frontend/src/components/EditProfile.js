import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EditProfile = () => {            
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleEditProfile = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and page refreshing

    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          age,
          gender
        },
        {
          withCredentials: true
        }
      );
      
      // Dispatch the updated user data
      dispatch(addUser(res.data));

   

      // Navigate to the profile page after success
       navigate('/'); 
    } catch (err) {
      console.error(err);
     
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 my-5">
      <div className="w-full max-w-lg bg-base-300 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
        <form className="space-y-4" onSubmit={handleEditProfile}>
          <div>
            <label className="block text-sm font-medium text-gray-400">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Gender</label>
            <input
              type="text"
              name="gender"
              value={gender}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
