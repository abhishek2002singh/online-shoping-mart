import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import axios from 'axios';
import {BASE_URL} from '../utils/Constant'
import {removeUser} from '../utils/userSlice'
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const cardItem = useSelector((store) => store.card.items);
  const userInformation = useSelector((store) => store.user?.user || null); 
  const userInformation1 = useSelector((store) => store.user?.data || null); 
  const isOnline = useOnlineStatus();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  

  const handlelogout = async()=>{
    try{
          await axios.post(BASE_URL+"/logout" ,{}, {withCredentials:true})
          dispatch(removeUser())
          return navigate("/login")


    }catch(err){
      console.error(err)
    }
    
  }

  return (
    <nav className="w-full bg-indigo-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to='/'>
        <div className="text-2xl font-bold text-white">
          StoreLogo
        </div>
        </Link>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden lg:flex items-center relative mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[300px] md:w-[400px] lg:w-[450px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-3 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-600 focus:outline-none">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Online Status, Profile/Login, and Cart */}
        <div className="flex items-center space-x-4">
          {/* Online Status Indicator (Visible on all screens) */}
          <div className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
            ></span>
            <span className="text-white text-sm">{isOnline ? 'Online' : 'Offline'}</span>
          </div>

          {/* Profile Image or Login Button */}
          {userInformation || userInformation1 ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white focus:outline-none"
              >
                <img
                  src={userInformation?.images||userInformation1?.images || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/EditProfile"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/place"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  >
                    order
                  </Link >
                  <button
                    onClick={handlelogout}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="text-white font-semibold hover:text-black">Login</button>
            </Link>
          )}

          {/* Cart Icon */}
          <Link to="/CardItems">
            <button className="relative">
              <FaShoppingCart size={24} className="text-white hover:text-gray-200" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cardItem.length}
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Responsive Search Bar (Visible only on small screens) */}
      <div className="lg:hidden px-4 py-2">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-3 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-600 focus:outline-none">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
