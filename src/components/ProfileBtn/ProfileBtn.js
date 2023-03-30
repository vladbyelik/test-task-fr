import React from 'react';

import './ProfileBtn.scss';

const ProfileBtn = ({ icon, title }) => {
  return (
    <button className='profile-btn'>
      {icon}
      {title}
    </button>
  )
}

export default ProfileBtn;