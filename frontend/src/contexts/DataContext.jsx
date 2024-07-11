/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

useEffect(()=> {
  async function getUserData(){
    try {
      const response = await fetch(`http://localhost:5002/users/getData/${loggedInUser.id}`)
      if (response.ok){
        const data = await response.json();
        setLoggedInUser(data);

      } else {
        const { error } = await response.json();
        throw new Error(error.message)
      }

    } catch (error) {
      console.log(error.message);
    }
  }
  getUserData();
})


  // console.log(loggedInUser);

  function logout(){
    setLoggedInUser(null);
  }


  // console.log(data);
  async function getSearchedRestaurants() {
    try {
      const response = await fetch("http://localhost:5002/search/getRestaurants");
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // useEffect(() => {
  //   getSearchedRestaurants(); // Fetch restaurants initially
  // }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loggedInUser,
        setLoggedInUser,
        logout,
        showProfile,
        setShowProfile,
        restaurants,
        setRestaurants,
        getSearchedRestaurants,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
