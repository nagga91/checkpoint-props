import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <img src={children} alt="Profile Pic" style={{ width: 200, height: 200, borderRadius: '50%' }} />
      </div>
      <div style={{ margin: 20 }}>
        <h2>{fullName}</h2>
        <p style={{ fontStyle: 'italic' }}>{profession}</p>
        <p>{bio}</p>
        <button onClick={() => handleName(fullName)}>Click Me</button>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'No profession specified',
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
