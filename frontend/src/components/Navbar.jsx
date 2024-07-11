import RegisterAndLogin from "./RegisterAndLogin";
// import Basket from "./Basket";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import UserProfile from "./UserProfile";


function Navbar() {

  const { loggedInUser, logout } = useContext(DataContext);
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <nav>
        {loggedInUser ? (
          <div className= "user-info">
            <span className="welcome-message">Welcome, {loggedInUser.firstName}!</span>
            <button className="logout-button" onClick={logout}>
              Logout
            </button> 
            <button className="profile-button" onClick={toggleProfile}>
               {showProfile ? `Hide Profile` : `Show Profile`}
            </button>
          </div>
        ) : (
          <RegisterAndLogin />
        )
        }
        {/* <Basket /> */}
      </nav>
      {showProfile && <UserProfile />}
    </>
  );
}

export default Navbar;

// <nav>
//   <ul>
//     <li>Welcome "username" </li>
//   </ul>
//   <button >Logout</button>
// </nav>
