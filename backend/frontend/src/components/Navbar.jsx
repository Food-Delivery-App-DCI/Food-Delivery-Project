import { useContext, /*  useState, */ useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
// import RegisterAndLogin from "./RegisterAndLogin";
import CustomModal from "./CustomModal";
import Basket from "./Basket";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Frame 168.png";

import "../style/Navbar.css";

function Navbar() {
  const {
    loggedInUser,
    logout,
    setIsToRegister,
    setToggleRegisterOrLoginUser,
    isDropdownOpen,
    setIsDropdownOpen,
    setCompletedStages,
    setCurrentStage,
  } = useContext(DataContext);
  const { totalItemCount, isBasketModalOpen, setIsBasketModalOpen } = useContext(BasketContext);

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openBasketModal = () => {
    // if (items.length > 0) {
    setIsBasketModalOpen(true);
    // }
  };

  const closeBasketModal = () => {
    setIsBasketModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleBackToMainPage = () => {
    // Clear local storage and reset state before navigating
    localStorage.removeItem("currentStage");
    localStorage.removeItem("completedStages");
    localStorage.removeItem("orderId");
    localStorage.removeItem("purchasedItems");
    // localStorage.removeItem("sessionId");
    // localStorage.removeItem("restaurantAddress");
    // localStorage.removeItem("restaurantId");
    // localStorage.removeItem("restaurantName");
    // localStorage.removeItem("searchedRestaurantsResults");
    setCurrentStage(0);
    setCompletedStages([]);
    // setOrderId(null);
    setToggleRegisterOrLoginUser(false);

    // Navigate back to the main page
    navigate("/");
  };

  return (
    <>
      <nav>
        {/* <h1 onClick={handleBackToMainPage}>DelivEats</h1> */}
        <img className="logo" src={logo} alt="logo" onClick={handleBackToMainPage} />
        <div className="basket-and-register-container">
          {loggedInUser ? (
            <div className="user-info" ref={dropdownRef}>
              <span className="welcome-message" onClick={toggleDropdown}>
                Welcome, {loggedInUser.firstName}! {""}
                <FontAwesomeIcon icon={faCaretDown} style={{ color: "#266241" }} />
              </span>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile/preferences" className="dropdown-item" onClick={toggleDropdown}>
                    Profile
                  </Link>

                  <button className="logout-button" onClick={logout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* <RegisterAndLogin /> */}
              <div className="button-container">
                <button
                  className="login-button"
                  onClick={() => {
                    setIsToRegister(false);
                    setToggleRegisterOrLoginUser(true);
                    // setIsModalOpen(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="register-button"
                  onClick={() => {
                    setIsToRegister(true);
                    setToggleRegisterOrLoginUser(true);
                    // setIsModalOpen(true);
                  }}
                >
                  Register
                </button>
              </div>
            </>
          )}

          <div className="cart-logo" onClick={openBasketModal}>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#266241" }} />
            <span className="item-count">{totalItemCount}</span>
          </div>
        </div>
      </nav>

      <CustomModal isOpen={isBasketModalOpen} onClose={closeBasketModal}>
        <Basket isModal={true} />
      </CustomModal>
    </>
  );
}

export default Navbar;
