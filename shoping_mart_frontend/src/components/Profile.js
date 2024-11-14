import React from 'react';
import { useSelector } from 'react-redux';
import ShowProfile from './ShowProfile';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    const userShowData = useSelector((store) => store.user||null);
    

    return (
        <div>
            <ShowProfile userShowData={userShowData} />
            <Outlet/>
        </div>
    );
};

export default Profile;
