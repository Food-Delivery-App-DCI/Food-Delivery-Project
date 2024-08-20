import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [originalUser, setOriginalUser] = useState({});
  const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      const { firstName, lastName, email } = loggedInUser;
      setUser({ firstName, lastName, email, password: "" });
      setOriginalUser({ firstName, lastName, email, password: "" });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/users/update/${loggedInUser.id}`, settings);
      if (response.ok) {
        const updatedUser = await response.json();
        setLoggedInUser(updatedUser);
        setOriginalUser({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: "",
        });
        alert(updatedUser.message);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };

  const handleCancel = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
        };
        const response = await fetch(`${import.meta.env.VITE_API}/users/delete/${loggedInUser.id}`, settings);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: "", lastName: "", email: "", password: "" });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <div className="settings-actions">
          <button type="button" className="settings-edit" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <div className="settings-inputs-container">
          <div>
            <strong>First Name:</strong>
            {!isEditing ? (
              <> {user.firstName}</>
            ) : (
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
                className="settings-input"
              />
            )}
          </div>
          <div>
            <strong>Last Name:</strong>
            {!isEditing ? (
              <> {user.lastName}</>
            ) : (
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={handleChange}
                className="settings-input"
              />
            )}
          </div>
          <div>
            <strong>Email:</strong>
            {!isEditing ? (
              <> {user.email}</>
            ) : (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                className="settings-input"
              />
            )}
          </div>
          <div>
            <strong>Password:</strong>
            {!isEditing ? (
              <> ********</>
            ) : (
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  className="form-input password-input"
                />
                <span className="settings-password-toggle-icon" onClick={togglePasswordVisibility}>
                  {/* {showPassword ? "🙈" : "👁️"} */}
                  {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </span>
              </div>
            )}
          </div>
        </div>
        {!isEditing ? (
          <>
            {/* <button
              type="button"
              className="settings-edit"
              onClick={handleEdit}
            >
              Edit
            </button> */}
          </>
        ) : (
          <div className="settings-save-cancel-button-container">
            <button type="button" className="settings-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="settings-save">
              Save
            </button>
          </div>
        )}
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;
