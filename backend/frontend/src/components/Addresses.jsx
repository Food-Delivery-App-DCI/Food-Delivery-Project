/* eslint-disable react/no-unescaped-entities */
import "../style/Addressess.css";
import { useContext, useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { DataContext } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Addresses() {
  const { loggedInUser, handleHTTPRequestWithToken } = useContext(DataContext);
  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState("");
  const [editedLabel, setEditedLabel] = useState("");
  const [label, setLabel] = useState("");
  const [address, setAddress] = useState("");
  const [addingNew, setAddingNew] = useState(false);

  function handleEdit(id) {
    setEditingId(id);
    const addressToEdit = addresses.find((address) => address._id === id);
    setEditedAddress(addressToEdit.address);
    setEditedLabel(addressToEdit.label);
  }

  function handleLabelChange(e) {
    setEditedLabel(e.target.value);
  }

  function handlePlaceSelected(place) {
    setAddress(place.formatted_address);
  }

  function handleCancel() {
    setEditingId(null);
    setAddingNew(false);
  }

  useEffect(() => {
    async function getAllAddresses() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/users/getAllAddresses/${loggedInUser.id}`);

        if (response.ok) {
          const data = await response.json();
          setAddresses(data.addresses);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInUser) {
      getAllAddresses();
    }
  }, [loggedInUser]);

  async function handleSave(id) {
    const settings = {
      method: "POST",
      body: JSON.stringify({ editedAddress, editedLabel }),
      headers: {
        "Content-Type": "application/JSON",
      },
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/users/editAddress/${loggedInUser.id}/addresses/${id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setEditingId(null);
  }

  async function handleDelete(id) {
    const settings = {
      method: "DELETE",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/users/deleteAddress/${loggedInUser.id}/addresses/${id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ label, address }),
    };

    try {
      const response = await handleHTTPRequestWithToken(
        `${import.meta.env.VITE_API}/users/addAddress/${loggedInUser.id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setLabel("");
    setAddress("");
    setAddingNew(false); // Hide the form after adding the address
  }

  return (
    <>
      <div className="address-book">
        <ul>
          {addresses.length === 0 ? (
            <h3>Hey, let's save your address here!</h3>
          ) : (
            addresses.map((address) => (
              <li key={address._id} className="address-item">
                {editingId === address._id ? (
                  <div className="address-edit">
                    <input type="text" value={editedLabel} onChange={handleLabelChange} placeholder="Label" required />
                    <Autocomplete
                      apiKey={import.meta.env.VITE_GOOGLE_API}
                      value={editedAddress}
                      onPlaceSelected={(place) => setEditedAddress(place.formatted_address)}
                      options={{
                        types: ["address"],
                      }}
                      placeholder="Address"
                      required
                      onChange={(e) => setEditedAddress(e.target.value)}
                    />
                    <div className="address-save-cancel-container">
                      <button onClick={handleCancel} className="cancel-button">
                        Cancel
                      </button>
                      <button onClick={() => handleSave(address._id)} className="save-button">
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="address-view">
                    <div className="address-actions">
                      <button onClick={() => handleEdit(address._id)} className="edit-address-button">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button onClick={() => handleDelete(address._id)} className="delete-address-button">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                    <div className="address-label">{address.label}</div>
                    <div className="address-details">{address.address}</div>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        {addingNew ? (
          <form onSubmit={handleSubmit} className="address-edit">
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="eg. Home, Office, Other"
              required
            />
            <Autocomplete
              apiKey={import.meta.env.VITE_GOOGLE_API}
              value={address}
              onPlaceSelected={handlePlaceSelected}
              options={{
                types: ["address"],
              }}
              placeholder="Address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="address-save-cancel-container">
              <button onClick={handleCancel} className="cancel-button">
                Cancel
              </button>
              <button onClick={() => handleSave(address._id)} className="save-button">
                Save
              </button>
            </div>
          </form>
        ) : (
          <button onClick={() => setAddingNew(true)} className="add-address-button">
            Add New Address
          </button>
        )}

      </div>
    </>
  );
}

export default Addresses;
