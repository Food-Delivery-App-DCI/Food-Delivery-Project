// import { useCallback, useContext, useEffect /* useState */, useState } from "react";
// import { useParams } from "react-router-dom";
// import { DataContext } from "../contexts/DataContext";
// import { BasketContext } from "../contexts/BasketContext";
// import { useSwipeable } from "react-swipeable";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Basket from "../components/Basket";
// import RegisterAndLogin from "../components/RegisterAndLogin";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

// import "../style/RestaurantMenu.css";

// function RestaurantMenu() {
//   const { id } = useParams();
//   const { restaurants, getSearchedRestaurants, restaurant, setRestaurant, loggedInUser, toggleRegisterOrLoginUser } =
//     useContext(DataContext);
//   const { addItemToBasket } = useContext(BasketContext);
//   const [isFavorited, setIsFavorited] = useState(false);
//   // const [restaurant, setRestaurant] = useState(null);

//   console.log(restaurant);

//   // const restaurant = restaurants.find((r) => r._id === id);

//   const fetchRestaurants = useCallback(async () => {
//     await getSearchedRestaurants();
//   }, []);

//   // useEffect(() => {
//   //   fetchRestaurants();
//   // }, [fetchRestaurants]);

//   useEffect(() => {
//     if (!restaurants.length) {
//       fetchRestaurants();
//     }
//   }, [fetchRestaurants, restaurants.length]);

//   // useEffect(() => {
//   //   const foundRestaurant = restaurants.find((r) => r._id === id);
//   //   setRestaurant(foundRestaurant);

//   //   // if (foundRestaurant && loggedInUser) {
//   //   //   setIsFavorited(loggedInUser.favoriteRestaurants?.includes(id));
//   //   // }
//   // }, [id, restaurants]);

//   useEffect(() => {
//     if (!restaurant || restaurant._id !== id) {
//       const foundRestaurant = restaurants.find((r) => r._id === id);
//       if (foundRestaurant) {
//         setRestaurant(foundRestaurant);
//       } else {
//         fetchRestaurants().then(() => {
//           const newRestaurant = restaurants.find((r) => r._id === id);
//           setRestaurant(newRestaurant);
//         });
//       }
//     }
//   }, [id, restaurant, restaurants, fetchRestaurants, setRestaurant]);

//   if (!restaurant) {
//     return (
//       <>
//         <Navbar />
//         <div className="not-found">Restaurant not found</div>
//         <Footer />
//       </>
//     );
//   }

//   async function handleSetFavoriteRestaurant(id) {
//     try {
//       const settings = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/JSON",
//         },
//         body: JSON.stringify({ isFavorited: !isFavorited }),
//       };

//       const response = await fetch(`${import.meta.env.VITE_API}/users/favorite/${loggedInUser.id}/${id}`, settings);

//       if (response.ok) {
//         setIsFavorited(!isFavorited);
//         const { favoritedRestaurant } = await response.json();
//         console.log(favoritedRestaurant);
//         setRestaurant(favoritedRestaurant);
//       } else {
//         const { error } = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const handlers = useSwipeable({
//     onSwipedLeft: () => console.log("Swiped Left"),
//     onSwipedRight: () => console.log("Swiped Right"),
//   });

//   console.log(restaurant);
//   return (
//     <>
//       <Navbar />
//       {toggleRegisterOrLoginUser ? (
//         <RegisterAndLogin />
//       ) : (
//         <div className="restaurant-menu-page-container">
//           <div className="main-content">
//             <div className="menu-card">
//               {loggedInUser ? (
//                 <div className="favorite-icon-container">
//                   {isFavorited ? (
//                     <FaHeart
//                       size="3rem"
//                       color="red"
//                       onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
//                       className="favorite-icon"
//                     />
//                   ) : (
//                     <FaRegHeart
//                       className="favorite-icon"
//                       size="3rem"
//                       color="black"
//                       onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
//                     />
//                   )}
//                 </div>
//               ) : null}
//               <div className="restaurant-info">
//                 <h1 className="restaurant-name">{restaurant.basicInfo.venueName}</h1>
//                 <p className="restaurant-address">
//                   {restaurant.basicInfo.address.street}, {restaurant.basicInfo.address.postalCode},{" "}
//                   {restaurant.basicInfo.address.city}
//                 </p>
//               </div>

//               <div className="menu-offers">
//                 {/* <h2>Current Offers</h2> */}
//                 <div className="current-offers" {...handlers}>
//                   {restaurant?.promotionalInfo?.currentOffers?.map((offer, index) => {
//                     const totalOfferPrice = offer.items.reduce((total, item) => total + item.price, 0);

//                     // Get the names of all items in the offer
//                     const itemNames = offer.items.map((item) => item.name).join(", ");

//                     const offerCategoryMenu = {
//                       _id: offer._id,
//                       name: offer.category,
//                       description: itemNames,
//                       price: totalOfferPrice,
//                       items: offer.items,
//                     };

//                     return (
//                       <div key={index} className="offer-category">
//                         <h3>{offer.category}</h3>
//                         <div className="offer-items">
//                           {offer.items.map((item) => (
//                             <div key={item._id} className="offer-item-card">
//                               <div>
//                                 <p className="offer-name">{item.name}</p>
//                                 <p className="offer-description">{item.description}</p>
//                               </div>
//                               <div>
//                                 <p className="offer-price">€{item.price}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                         <div className="offer-total-price">
//                           <p>Offer: €{totalOfferPrice}</p>
//                           <button className="offer-add-button" onClick={() => addItemToBasket(offerCategoryMenu)}>
//                             Add
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="menu-items">
//                 {restaurant?.menu?.map((item) => (
//                   <div key={item._id} className="menu-item-card">
//                     <div className="item-info">
//                       <h2>{item.category}</h2>
//                       {item.items.map((food) => (
//                         <div className="item-details" key={food._id}>
//                           <img
//                             src={
//                               food.image.startsWith("uploads")
//                                 ? `${import.meta.env.VITE_API}/${food.image}`
//                                 : food.image
//                             }
//                             alt=""
//                             width={100}
//                           />

//                           <div>
//                             <p className="item-name">{food.name}</p>
//                             <p className="item-description">{food.description}</p>
//                             <p className="item-price">€{food.price}</p>
//                           </div>
//                           <button className="add-button" onClick={() => addItemToBasket(food)}>
//                             Add
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <Basket id={id} />
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// }

// export default RestaurantMenu;

import { /* useCallback */ useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
import RegisterAndLogin from "../components/RegisterAndLogin";
import "../style/RestaurantMenu.css";

function RestaurantMenu() {
  const { id } = useParams();
  const {
    restaurants,
    getSearchedRestaurants,
    restaurant,
    setRestaurant,
    loggedInUser,
    toggleRegisterOrLoginUser,
    setLoggedInUser,
  } = useContext(DataContext);
  const { addItemToBasket } = useContext(BasketContext);
  const [isFavorited, setIsFavorited] = useState(loggedInUser?.favoriteRestaurants?.includes(id));

  // console.log(loggedInUser.favoriteRestaurants?.includes(id));
  // console.log(id);

  // console.log(isFavorited);

  // console.log(loggedInUser);

  useEffect(() => {
    if (!restaurants.length) {
      getSearchedRestaurants();
    }
  }, [getSearchedRestaurants, restaurants.length]);

  // useEffect(() => {
  //   const foundRestaurant = restaurants.find((r) => r._id === id);
  //   if (foundRestaurant) {
  //     setRestaurant(foundRestaurant);
  //   }
  // });

  useEffect(() => {
    if (!restaurant || restaurant._id !== id) {
      const foundRestaurant = restaurants.find((r) => r._id === id);
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
      } else {
        getSearchedRestaurants().then(() => {
          const newRestaurant = restaurants.find((r) => r._id === id);
          setRestaurant(newRestaurant);
        });
      }
    }
  }, [id, restaurant, restaurants, getSearchedRestaurants, setRestaurant]);

  async function handleSetFavoriteRestaurant(id) {
    try {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ isFavorited: !isFavorited }),
      };

      const response = await fetch(`${import.meta.env.VITE_API}/users/favorite/${loggedInUser.id}/${id}`, settings);

      if (response.ok) {
        setIsFavorited(!isFavorited);
        const data = await response.json();
        setLoggedInUser(data);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!restaurant) {
    return (
      <>
        <Navbar />
        <div className="not-found">Restaurant not found</div>
        <Footer />
      </>
    );
  }

  console.log(restaurant);

  return (
    <>
      <Navbar />
      {toggleRegisterOrLoginUser ? (
        <RegisterAndLogin />
      ) : (
        <div className="restaurant-menu-page-container">
          <div className="main-content">
            <div className="menu-card">
              {loggedInUser ? (
                <div className="favorite-icon-container">
                  {isFavorited ? (
                    <FaHeart
                      size="2.4rem"
                      color="red"
                      onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
                      className="favorite-icon"
                    />
                  ) : (
                    <FaRegHeart
                      className="favorite-icon"
                      size="2.4rem"
                      color="black"
                      onClick={() => handleSetFavoriteRestaurant(restaurant._id)}
                    />
                  )}
                </div>
              ) : null}
              <div className="restaurant-info">
                <h1 className="restaurant-name">{restaurant.basicInfo.venueName}</h1>
                <p className="restaurant-address">
                  {restaurant.basicInfo.address.street}, {restaurant.basicInfo.address.postalCode},{" "}
                  {restaurant.basicInfo.address.city}
                </p>
              </div>

              <div className="menu-offers">
                <div className="current-offers">
                  {restaurant?.promotionalInfo?.currentOffers?.map((offer, index) => {
                    const totalOfferPrice = offer.items.reduce((total, item) => total + item.price, 0);

                    const itemNames = offer.items.map((item) => item.name).join(", ");

                    const offerCategoryMenu = {
                      _id: offer._id,
                      name: offer.category,
                      description: itemNames,
                      price: totalOfferPrice,
                      items: offer.items,
                    };

                    return (
                      <div key={index} className="offer-category">
                        <h3>{offer.category}</h3>
                        <div className="offer-items">
                          {offer.items.map((item) => (
                            <div key={item._id} className="offer-item-card">
                              <div>
                                <p className="offer-name">{item.name}</p>
                                <p className="offer-description">{item.description}</p>
                              </div>
                              <div>
                                <p className="offer-price">€{item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="offer-total-price">
                          <p>Offer: €{totalOfferPrice}</p>
                          <button className="offer-add-button" onClick={() => addItemToBasket(offerCategoryMenu)}>
                            Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="menu-items">
                {restaurant?.menu?.map((item) => (
                  <div key={item._id} className="menu-item-card">
                    <div className="item-info">
                      <h2>{item.category}</h2>
                      {item.items.map((food) => (
                        <div className="item-details" key={food._id}>
                          <img
                            src={
                              food.image.startsWith("uploads")
                                ? `${import.meta.env.VITE_API}/${food.image}`
                                : food.image
                            }
                            alt=""
                            width={100}
                          />

                          <div>
                            <p className="item-name">{food.name}</p>
                            <p className="item-description">{food.description}</p>
                            <p className="item-price">€{food.price}</p>
                          </div>
                          <button className="add-button" onClick={() => addItemToBasket(food)}>
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Basket id={id} />
        </div>
      )}
      <Footer />
    </>
  );
}

export default RestaurantMenu;
