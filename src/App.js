import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserData from './UserData';




function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const bars = [1, 2, 3, 4, 5, 6, 7, 8]

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar getUser={getUsers} />
      {isLoading ? (
        <div>
          <div className="middle">
            {
              bars.map((bar, index) => {
                return (
                  <div className={`bar bar${bar}`} key={index} ></div>
                )
              })
            }
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10  mx-16 sm:mx-8'>
          {users.map((user) => (
            <UserData user={user} key={user.id} />
          ))}
        </div>
      )}
    </>

  );
}

export default App;
