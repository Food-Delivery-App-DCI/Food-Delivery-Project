import { NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Profile.css";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

function Profile() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true when the location (route) changes
    setLoading(true);

    // Simulate data loading with a timeout or trigger actual data fetching here
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust this duration based on actual data loading time

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="container-profile">
        <div className="navbar-profile">
          <ul>
            <li>
              <NavLink to="preferences">Preferences</NavLink>
            </li>
            <li>
              <NavLink to="addresses">Addresses</NavLink>
            </li>
            <li>
              <NavLink to="order-history">Order history</NavLink>
            </li>
            <li>
              <NavLink to="settings">Settings</NavLink>
            </li>
          </ul>
        </div>
        <div className="content-profile">
          {loading ? (
            <div className="loading-spinner">
              <BounceLoader color={"#165e4b"} loading={loading} size={40} />
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
