import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.jsx";
// import CustomModal from "./CustomModal.jsx";
import "../style/RSRegisterAndLogin.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function RSRegisterAndLogin() {
  // State to check all inputs here
  const [loginInputs, setLoginInputs] = useState({
    basicInfo: {
      businessName: "",
      businessId: "",
      owner: "",
      password: "",
      venueName: "",
      contact: {
        email: "",
        phoneNumber: "",
      },
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
      },
    },
  });
  // state to check if user wants to register
  // const [isToRegister, setIsToRegister] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false); // state variable to control the checkbox

  const {
    setLoggedInRestaurant,
    showPassword,
    togglePasswordVisibility,
    isToRegisterRestaurant,
    setToggleRegisterOrLoginRestaurant,
    // setIsToRegisterRestaurant,
  } = useContext(DataContext);

  // initialize useNavigate hook
  const navigate = useNavigate();

  // function to handle inputs
  function handleChange(e) {
    const { name, value } = e.target;
    const keys = name.split(".");

    setLoginInputs((prevState) => {
      let newState = { ...prevState };
      let nestedState = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        nestedState = nestedState[keys[i]];
      }

      nestedState[keys[keys.length - 1]] = value;

      return newState;
    });
  }

  // function to handle checkbox
  function handleCheckboxChange(e) {
    setIsTermsChecked(e.target.checked);
  }

  // function to run when the form is submitted
  async function handleSubmit(e) {
    e.preventDefault();

    if (isToRegisterRestaurant && !isTermsChecked) {
      alert("You must agree to the Terms of Use before proceeding.");
      return;
    }

    // Since we are doing conditional request, we first declare a variable to contain the object we are sending
    let user;

    // If isToRegister is true, it means the user is registering so we send an object that includes the username field
    // If isToRegister is false, it means the user is logging in so we don't add the username field
    if (isToRegisterRestaurant) {
      user = {
        basicInfo: {
          businessName: loginInputs.basicInfo.businessName,
          businessId: loginInputs.basicInfo.businessId,
          owner: loginInputs.basicInfo.owner,
          password: loginInputs.basicInfo.password,
          venueName: loginInputs.basicInfo.venueName,
          contact: {
            email: loginInputs.basicInfo.contact.email,
            phoneNumber: loginInputs.basicInfo.contact.phoneNumber,
          },
          address: {
            street: loginInputs.basicInfo.address.street,
            city: loginInputs.basicInfo.address.city,
            state: loginInputs.basicInfo.address.state,
            postalCode: loginInputs.basicInfo.address.postalCode,
          },
        },
      };
    } else {
      user = {
        email: loginInputs.basicInfo.contact.email,
        password: loginInputs.basicInfo.password,
      };
    }

    const settings = {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    };

    // If isToRegister is true, we send the request to the register route, if isToRegister is false, then we send the request to the login route
    try {
      const response = await fetch(
        isToRegisterRestaurant
          ? `${import.meta.env.VITE_API}/restaurants/register`
          : `${import.meta.env.VITE_API}/restaurants/login`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data.message);
        setLoggedInRestaurant(data.restaurant);
        setToggleRegisterOrLoginRestaurant(false);
        // setIsModalOpen(false);
        navigate("/rs-home/orders-active");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    setLoginInputs({
      basicInfo: {
        businessName: "",
        businessId: "",
        owner: "",
        password: "",
        venueName: "",
        contact: {
          email: "",
          phoneNumber: "",
        },
        address: {
          street: "",
          city: "",
          state: "",
          postalCode: "",
        },
      },
    });
    setIsTermsChecked(false); // Reset the checkbox state
  }

  return (
    <div className="rs-register-login-page">
      {isToRegisterRestaurant ? <h2>Register</h2> : <h2>Login</h2>}
      {isToRegisterRestaurant !== null && (
        <form onSubmit={handleSubmit} className="rs-form">
          {isToRegisterRestaurant && (
            <div className="name-fields">
              <label className="form-label">
                Business Name
                <input
                  type="text"
                  name="basicInfo.businessName"
                  value={loginInputs.basicInfo.businessName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">
                Business Id
                <input
                  type="text"
                  name="basicInfo.businessId"
                  value={loginInputs.basicInfo.businessId}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">
                Owner
                <input
                  type="text"
                  name="basicInfo.owner"
                  value={loginInputs.basicInfo.owner}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">
                Venue Name
                <input
                  type="text"
                  name="basicInfo.venueName"
                  value={loginInputs.basicInfo.venueName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">
                Phone Number
                <input
                  type="text"
                  name="basicInfo.contact.phoneNumber"
                  value={loginInputs.basicInfo.contact.phoneNumber}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <div className="form-items-line">
                <label className="form-label">
                  Street
                  <input
                    type="text"
                    name="basicInfo.address.street"
                    value={loginInputs.basicInfo.address.street}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  City
                  <select
                    name="basicInfo.address.city"
                    value={loginInputs.basicInfo.address.city}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">
                      Choose City
                    </option>
                    <option value="Berlin">Berlin</option>
                    <option value="Düsseldorf">Düsseldorf</option>
                    <option value="Hannover">Hannover</option>
                    <option value="Leipzig">Leipzig</option>
                  </select>
                </label>
              </div>
              <div className="form-items-line">
                <label className="form-label">
                  State
                  <input
                    type="text"
                    name="basicInfo.address.state"
                    value={loginInputs.basicInfo.address.state}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Postal Code
                  <input
                    type="text"
                    name="basicInfo.address.postalCode"
                    value={loginInputs.basicInfo.address.postalCode}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
              </div>
            </div>
          )}
          <label className="form-label">
            Email
            <input
              type="email"
              name="basicInfo.contact.email"
              value={loginInputs.basicInfo.contact.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label password-field">
            Password
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="basicInfo.password"
                value={loginInputs.basicInfo.password}
                onChange={handleChange}
                required
                className="form-input password-input"
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </span>
            </div>
          </label>
          {isToRegisterRestaurant && (
            <label className="checkbox-form-label">
              <input
                type="checkbox"
                checked={isTermsChecked}
                onChange={handleCheckboxChange}
                required
                className="form-checkbox"
              />
              <span className="terms-of-use-span" style={{ whiteSpace: "pre-wrap" }}>
                {" "}
                I agree to the Terms of Use.
              </span>
            </label>
          )}

          <div className="buttons-container">
            <button type="button" className="cancel-button" onClick={() => setToggleRegisterOrLoginRestaurant(false)}>
              Cancel
            </button>
            <button className="submit-button">{isToRegisterRestaurant ? "Register" : "Login"}</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RSRegisterAndLogin;
