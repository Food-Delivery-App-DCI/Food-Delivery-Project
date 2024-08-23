import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import "../style/Preferences.css";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";

function Preferences() {
  const { userOrderHistory, loggedInUser, setRestaurant, getUserOrderHistory } = useContext(DataContext);
  const { setIsBasketModalOpen, setBasket } = useContext(BasketContext);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      getUserOrderHistory();
    }
  }, [loggedInUser]);

  useEffect(() => {
    async function getFavorites() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/users/get-favorites/${loggedInUser.id}`);

        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInUser) {
      getFavorites();
    }
  }, [loggedInUser]);

  // console.log(favorites);

  async function handleCardClick(id) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants/get-favorite-restaurant/${id}`);

      if (response.ok) {
        const data = await response.json();
        setRestaurant(data);
        navigate(`/restaurant/${id}`);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function orderAgain(orderId) {
    // console.log(orderId);
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants/restaurant-with-order/${orderId}`);

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setRestaurant(data.restaurantInfo);
        setBasket(data.items);
        setIsBasketModalOpen(true);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // console.log(userOrderHistory);

  return (
    <>
      <div className="favorites-container">
        <h3>Your favorites</h3>
        {favorites.length === 0 ? (
          <>
            <h2> You have no saved favorites at the moment</h2>
            <p>
              You’ll find your favorite restaurants here. You can add favorites by tapping the heart icon during the
              ordering process.
            </p>
          </>
        ) : (
          <>
            <p className="info">
              You’ll find your favorite restaurants here. You can add favorites by tapping the heart icon during the
              ordering process.
            </p>

            <div className="favorites-items-container">
              {favorites.map((favorite) => {
                return (
                  <div className="favorite-card" key={favorite._id} onClick={() => handleCardClick(favorite._id)}>
                    <div className="image-container">
                      <img
                        src={
                          favorite.basicInfo.coverImage.startsWith("uploads")
                            ? `${import.meta.env.VITE_API}/${favorite.basicInfo.coverImage}`
                            : favorite.basicInfo.coverImage
                        }
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <h2>{favorite.basicInfo.venueName}</h2>
                      <p>
                        {favorite.basicInfo.address.street}, {favorite.basicInfo.address.postalCode},{" "}
                        {favorite.basicInfo.address.city}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="order-again-container">
        <h3>Order again</h3>
        {userOrderHistory?.length === 0 ? (
          <>
            <h2> You have no saved orders at the moment</h2>
            <p>
              You can order again your favorite orders again by clicking on the order again button on an order card.
            </p>
          </>
        ) : (
          <>
            <p className="info">
              You can order again your favorite orders again by clicking on the order again button on an order card.
            </p>
            <div className="order-again-items-container">
              {userOrderHistory
                ?.slice()
                .reverse()
                .map((order) => {
                  {
                    /* const date = new Date(order.date);
                  const updateDate = new Date(order.updatedAt);
                  const formattedDate = isNaN(date.getTime())
                    ? "Invalid Date"
                    : date.toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true,
                      });
                  const formattedUpdatedDate = isNaN(updateDate.getTime())
                    ? "Invalid Date"
                    : updateDate.toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true,
                      }); */
                  }
                  return (
                    <div key={order._id} className="order">
                      <div className="restaurant-name-container">
                        <h2>{order.restaurantName}</h2>
                        <p>{order.restaurantAddress}</p>
                      </div>
                      {/* <div className="order-date">
                        <p>Date Ordered</p>
                        <p>{formattedDate}</p>
                      </div>
                      <div className="order-date">
                        <p>Date Delivered</p>
                        <p>{formattedUpdatedDate}</p>
                      </div> */}
                      <h3>Items</h3>
                      <div className="items-container">
                        {order?.items.map((item) => {
                          return (
                            <div key={item._id} className="item">
                              <p>{item.name}</p>
                              <div className="calculations">
                                <p>€{item.price.toFixed(2)}</p>
                                <p>x{item.quantity}</p>
                                <p>€{(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          );
                        })}
                        <div className="total-sum">
                          <p>Total Sum</p>
                          <p>€{order?.totalSum.toFixed(2)}</p>
                        </div>
                      </div>
                      <button onClick={() => orderAgain(order._id)} className="order-again-button">
                        Order Again
                      </button>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Preferences;
