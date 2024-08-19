/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sessionId, setSessionId] = useState(JSON.parse(localStorage.getItem("sessionId")) || "");
  const [userOrderHistory, setUserOrderHistory] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // state variable for password visibility
  const [loggedInRestaurant, setLoggedInRestaurant] = useState(null);
  const [isToRegister, setIsToRegister] = useState(null);
  const [isToRegisterRestaurant, setIsToRegisterRestaurant] = useState(null);
  const [toggleRegisterOrLoginUser, setToggleRegisterOrLoginUser] = useState(false);
  const [toggleRegisterOrLoginRestaurant, setToggleRegisterOrLoginRestaurant] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem("currentStage");
    return savedStage ? JSON.parse(savedStage) : 0;
  });
  const [completedStages, setCompletedStages] = useState(() => {
    const savedStages = localStorage.getItem("completedStages");
    return savedStages ? JSON.parse(savedStages) : [];
  });
  // const [orderId, setOrderId] = useState(() => {
  //   const savedOrderId = localStorage.getItem("orderId");
  //   return savedOrderId || contextOrderId;
  // });
  const [orderCounts, setOrderCounts] = useState({
    received: 0,
    preparing: 0,
    ready: 0,
    delivery: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(false);
  const [searchedRestaurantsResults, setSearchedRestaurantsResults] = useState(
    JSON.parse(localStorage.getItem("searchedRestaurantsResults")) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (restaurant) {
      localStorage.setItem("restaurant", JSON.stringify(restaurant));
    } else {
      localStorage.removeItem("restaurant");
    }
  }, [restaurant]);

  // OrderHistory.jsx and Preferences.jsx
  async function getUserOrderHistory() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/create-checkout-session/getOrderHistory/${loggedInUser.id}`
      );

      if (response.ok) {
        const { orderHistory } = await response.json();
        setUserOrderHistory(orderHistory);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (loggedInUser) {
      getUserOrderHistory();
    }
  }, [loggedInUser, setUserOrderHistory]);

  async function logout() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/logout/user`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        setLoggedInUser(null);
        localStorage.removeItem("searchedRestaurantsResults"); // Clear stored search results on logout
        setSearchedRestaurantsResults([]); // Clear context state
        setRestaurants([]);
        navigate("/");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  async function logoutRestaurant() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/logout/restaurant`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        setLoggedInRestaurant(null);
        navigate("/rs-register");
        setToggleRegisterOrLoginRestaurant(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  async function getSearchedRestaurants() {
    // try {
    //   const response = await fetch(`${import.meta.env.VITE_API}/search/getRestaurants`);
    //   if (response.ok) {
    //     const data = await response.json();
    //     setRestaurants(data);
    //   } else {
    //     const { error } = await response.json();
    //     throw new Error(error.message);
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }

    setRestaurants(searchedRestaurantsResults);
  }

  async function getRestaurantOrderHistory() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/get-restaurant-order-history/${loggedInRestaurant._id}`
      );

      if (response.ok) {
        const updatedRestaurant = await response.json();
        setLoggedInRestaurant(updatedRestaurant);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleHTTPRequestWithToken(url, settings) {
    const firstAccessResponse = await fetch(url, settings);

    if (firstAccessResponse.ok) {
      return firstAccessResponse;
    } else {
      let error;
      try {
        const responseClone = firstAccessResponse.clone();
        error = await responseClone.json();
      } catch (err) {
        console.log("Failed to parse JSON response", err);
      }

      if (error.status !== 401) {
        return firstAccessResponse;
      }

      console.log("Access Token has expired");

      const refreshResponse = await fetch(`${import.meta.env.VITE_API}/refresh-token`, { credentials: "include" });

      if (refreshResponse.ok) {
        console.log("New tokens received");

        const secondAccessResponse = await fetch(url, settings);
        return secondAccessResponse;
      } else {
        return refreshResponse;
      }
    }
  }

  async function handleHTTPRequestWithTokenRestaurant(url, settings) {
    const firstAccessResponse = await fetch(url, settings);

    if (firstAccessResponse.ok) {
      return firstAccessResponse;
    } else {
      let error;
      try {
        const responseClone = firstAccessResponse.clone();
        error = await responseClone.json();
      } catch (err) {
        console.log("Failed to parse JSON response", err);
      }

      if (error.status !== 401) {
        return firstAccessResponse;
      }

      console.log("Access Token has expired");

      const refreshResponse = await fetch(`${import.meta.env.VITE_API}/refresh-token/restaurant-token`, {
        credentials: "include",
      });

      if (refreshResponse.ok) {
        console.log("New tokens received");

        const secondAccessResponse = await fetch(url, settings);
        return secondAccessResponse;
      } else {
        return refreshResponse;
      }
    }
  }

  // function to handle password visibility toggle
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const updateOrderCounts = () => {
    if (loggedInRestaurant?.activeOrders) {
      const counts = {
        received: 0,
        preparing: 0,
        ready: 0,
        delivery: 0,
        completed: 0,
      };

      loggedInRestaurant.activeOrders.forEach((order) => {
        switch (order.orderStatus) {
          case "Order received by the restaurant. ✅":
            counts.received += 1;
            break;
          case "Food is being prepared. 🧑‍🍳":
            counts.preparing += 1;
            break;
          case "Food is ready to go! 🍽":
            counts.ready += 1;
            break;
          case "Your order is on its way. 🚗":
          case "Knock, knock! Your order is at the door. 🛎":
            counts.delivery += 1;
            break;
          case "Delivery Completed":
            counts.completed += 1;
            break;
          default:
            break;
        }
      });

      setOrderCounts(counts);
    }
  };

  useEffect(() => {
    updateOrderCounts();
  }, [loggedInRestaurant]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loggedInUser,
        setLoggedInUser,
        logout,
        showPassword,
        setShowPassword,
        togglePasswordVisibility,
        restaurants,
        setRestaurants,
        getSearchedRestaurants,
        sessionId,
        setSessionId,
        handleHTTPRequestWithToken,
        restaurant,
        setRestaurant,
        userOrderHistory,
        setUserOrderHistory,
        loggedInRestaurant,
        setLoggedInRestaurant,
        logoutRestaurant,
        getUserOrderHistory,
        handleHTTPRequestWithTokenRestaurant,
        getRestaurantOrderHistory,
        isToRegister,
        setIsToRegister,
        isToRegisterRestaurant,
        setIsToRegisterRestaurant,
        toggleRegisterOrLoginUser,
        setToggleRegisterOrLoginUser,
        isDropdownOpen,
        setIsDropdownOpen,
        toggleRegisterOrLoginRestaurant,
        setToggleRegisterOrLoginRestaurant,

        currentStage,
        setCurrentStage,
        completedStages,
        setCompletedStages,
        // orderId,
        // setOrderId,
        orderCounts,
        updateOrderCounts,
        loading,
        setLoading,
        searchedRestaurantsResults,
        setSearchedRestaurantsResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
