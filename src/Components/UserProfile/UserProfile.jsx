import React from 'react';
import { useLocation } from 'react-router-dom';
import Shop from '../Shop/Shop';



const UserProfile = ({addtocart, addtofav}) => {

    const location = useLocation()
    const {data} = location.state || {}

  return (
    <div className='prof'>
      <h1>Welcome, Dear {data.username}</h1>
      <Shop addtocart={addtocart} addtofav={addtofav}/>
      {/* Display user information here */}
    </div>
  );
};

export default UserProfile;
