/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BounceLoader } from "react-spinners";

import "../style/Searchbar.css";
import CarLoader from "./CarLoader";

function Searchbar({ className }) {
  const { setRestaurants, loading, setLoading, setSearchedRestaurantsResults } =
    useContext(DataContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Start loading
    setLoading(true);

    try {
      const settings = {
        body: JSON.stringify({ search }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
        credentials: "include",
      };

      const response = await fetch(
        `${import.meta.env.VITE_API}/search/restaurants`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
        setSearchedRestaurantsResults(data);
        localStorage.setItem(
          "searchedRestaurantsResults",
          JSON.stringify(data)
        );
        navigate("/search-results");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      // Stop loading after the request is complete
      setLoading(false);
    }

    setSearch("");
  }

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <CarLoader />
        </div>
      ) : (
        <div className={`${className}`}>
          <div className={`${className} search-container`}>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="eg. Brazilian Berlin"
              />
              <button className="search-button">Search</button>
            </form>

            <div className="cities-keywords-greet">
              <p className="black">
                We are proud to offer our services in <b>Berlin</b>,{" "}
                <b>Düsseldorf</b>, <b>Hannover</b> and <b>Leipzig</b>.
              </p>
              <p className="black">
                Search and find your next meal among{" "}
                <b>
                  Albanian, Brazilian, Croatian, French, Ghanaian, Italian,
                  Turkish
                </b>{" "}
                and <b>Ukrainian</b> restaurants.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Searchbar;
