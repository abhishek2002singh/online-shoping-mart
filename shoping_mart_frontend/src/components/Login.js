import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";
import ShimmerLogin from "./ShimmerLogin";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for shimmer effect

  const handleLogin = async () => {
    setLoading(true); 
    try {
      const res = await axios.post(`${BASE_URL}/login`, { emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data));
      navigate('/app');  // Navigate to the home page
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/signup`, { firstName, lastName, emailId, password, mobileNumber }, { withCredentials: true });
      dispatch(addUser(res.data));
      navigate('/app');  // Navigate to the home page
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <ShimmerLogin />;
  }

  return (
    <div className="min-h-screen flex items-start justify-center" style={{ paddingTop: "30px" }}>
      <section className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 p-10 bg-white shadow-lg rounded-lg">
        
        {/* Left Image Section */}
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvh693F3IdJE23kBQyVH48GN1BZuPCOJbTNA&s"
            alt="Ecommerce representation"
          />
        </div>
        
        {/* Form Section */}
        <div className="md:w-1/3 max-w-sm w-full">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-2xl font-bold">{isSignup ? 'Sign Up' : 'Log In'}</h2>
          </div>

          {isSignup && (
            <>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label className="block text-sm font-medium mb-1">Mobile Number</label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </>
          )}

          <label className="block text-sm font-medium mb-1">Email ID</label>
          <input
            className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
            type="text"
            placeholder="Enter Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />

          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-6"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 mb-4"
              onClick={isSignup ? handleSignup : handleLogin}
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
            <p className="text-sm">
              {isSignup ? 'Already have an account?' : "Don't have an account?"} 
              <button
                className="text-blue-500 font-semibold ml-1"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
