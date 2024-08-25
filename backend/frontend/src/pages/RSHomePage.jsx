import { NavLink, Outlet } from "react-router-dom";
import RSNavbar from "../components/RSNavbar";
import Footer from "../components/Footer";
import "../style/RSHomePage.css";

function RSHomePage() {
  return (
    <>
      <RSNavbar />
      <div className="rs-container-profile">
        <div className="restaurant-nav-profile">
          <ul>
            <li>
              <NavLink to="orders-active">Active Orders</NavLink>
            </li>
            <li>
              <NavLink to="orders-history">Orders History</NavLink>
            </li>
            <li>
              <NavLink to="menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="content-profile"></div> */}
        <div className="rs-content-profile">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RSHomePage;
