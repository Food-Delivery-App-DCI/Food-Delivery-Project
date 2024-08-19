import { DataContext } from "../contexts/DataContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import RegisterAndLogin from "../components/RegisterAndLogin";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAward } from "@fortawesome/free-solid-svg-icons";

import "../style/SearchResults.css";

function SearchResults() {
  const { restaurants, getSearchedRestaurants, setRestaurant, toggleRegisterOrLoginUser, loading } =
    useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSearchedRestaurants();
  }, []);

  function handleCardClick(id) {
    const selectedRestaurant = restaurants.find((restaurant) => restaurant._id === id);
    setRestaurant(selectedRestaurant);
    navigate(`/restaurant/${id}`);
  }

  const getTodayHours = (openAndCloseHours) => {
    const today = new Date().toLocaleString("en-us", { weekday: "long" }).toLowerCase();
    return openAndCloseHours[today];
  };

  console.log(restaurants);
  return (
    <div className="search-results-page">
      <Navbar />
      {toggleRegisterOrLoginUser ? (
        <RegisterAndLogin />
      ) : (
        <>
          <Searchbar className="results-searchbar" />
          {!loading ? (
            <div className="cards-results-container">
              {restaurants.map((restaurant) => {
                const todayHours = getTodayHours(restaurant.openAndCloseHours);
                return (
                  <div key={restaurant._id} className="card-results" onClick={() => handleCardClick(restaurant._id)}>
                    {" "}
                    <div className="restaurant-image">
                      <img
                        src={
                          restaurant.basicInfo.coverImage.startsWith("uploads")
                            ? `${import.meta.env.VITE_API}/${restaurant.basicInfo.coverImage}`
                            : restaurant.basicInfo.coverImage
                        }
                        alt=""
                        // width={100}
                      />
                    </div>
                    <div className="restaurant-info">
                      <div className="restaurant-card">
                        <h1>{restaurant.basicInfo.venueName}</h1>
                        <div className="restaurant-details">
                          <p>
                            {restaurant.basicInfo.address.street}, {restaurant.basicInfo.address.postalCode},{" "}
                            {restaurant.basicInfo.address.city}
                          </p>
                          <small>Today: {todayHours}</small>
                        </div>
                      </div>
                      <div className="restaurant-current-offers">
                        <div>Offers</div>
                        <ul>
                          {restaurant.promotionalInfo.currentOffers.map((offer, index) => {
                            return <li key={index}>{offer.category}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {/* This empty div is internationally here to make sure that the loader is working properly */}
              <div className="placeholder-div"></div>
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default SearchResults;
