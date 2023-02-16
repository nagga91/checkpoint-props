import React from 'react';
import Profile from './profile/Profile';
import profilePic from './picture1.png';

function App() {
  const handleName = (name) => {
    alert(`The name of the profile user is ${name}`);
  };

  return (
    <div className="App">
      <Profile fullName="Mohamed Nagga" bio="Front-end Developer" profession="Web Development" handleName={handleName}>
        {profilePic}
      </Profile>
    </div>
  );
}

export default App;
