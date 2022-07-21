import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();



const UserProvider = ({children}) => {

    const [user, setUser] = useState([]);

    const getUser = () => {
      const user = localStorage.getItem('user');
      setUser(user);
    }

    useEffect(() => {
      getUser();
    }, [])


  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}