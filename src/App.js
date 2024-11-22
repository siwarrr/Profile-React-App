import React, { useState, useEffect } from 'react';
import './App.css';
import ProfileCard from './components/profileCard';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
    .then(response => response.json())
    .then(data => {
      const formattedUsers = data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
        bio: `From ${user.location.city}, ${user.location.country}`,
        age: user.dob.age,
        email: user.email,
        phone: user.phone
      }));
      setUsers(formattedUsers);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='App'>
      <h1>Profile Card</h1>
      <div className='profiles-container'>
        {
          users.map((user, index) => (
            <ProfileCard 
              key={index}
              name={user.name}
              image={user.image}
              bio={user.bio}
              age={user.age}
              email={user.email}
              phone={user.phone}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
