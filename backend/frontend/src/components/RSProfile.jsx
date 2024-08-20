import "../style/RSProfile.css";
import { useContext, useRef, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

function RSProfile() {
  const {
    loggedInRestaurant,
    handleHTTPRequestWithTokenRestaurant,
    setLoggedInRestaurant,
    setToggleRegisterOrLoginRestaurant,
  } = useContext(DataContext);

  // State for editing modes
  const [editingSection, setEditingSection] = useState(null);

  // State for input values and original values
  const [basicInfo, setBasicInfo] = useState(loggedInRestaurant.basicInfo);
  const [originalBasicInfo, setOriginalBasicInfo] = useState(loggedInRestaurant.basicInfo);

  const [contact, setContact] = useState(loggedInRestaurant.basicInfo.contact);
  const [originalContact, setOriginalContact] = useState(loggedInRestaurant.basicInfo.contact);

  const [address, setAddress] = useState(loggedInRestaurant.basicInfo.address);
  const [originalAddress, setOriginalAddress] = useState(loggedInRestaurant.basicInfo.address);

  const [digitalPresence, setDigitalPresence] = useState(loggedInRestaurant.digitalPresence);
  const [originalDigitalPresence, setOriginalDigitalPresence] = useState(loggedInRestaurant.digitalPresence);

  const [openingHours, setOpeningHours] = useState(loggedInRestaurant.openAndCloseHours);
  const [originalOpeningHours, setOriginalOpeningHours] = useState(loggedInRestaurant.openAndCloseHours);

  const [image, setImage] = useState("");
  const imageInput = useRef(null);
  // const editedImageInput = useRef(null);

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    switch (section) {
      case "basicInfo":
        setBasicInfo({ ...basicInfo, [field]: value });
        break;
      case "contact":
        setContact({ ...contact, [field]: value });
        break;
      case "address":
        setAddress({ ...address, [field]: value });
        break;
      case "digitalPresence":
        setDigitalPresence({ ...digitalPresence, socialMedia: { ...digitalPresence.socialMedia, [field]: value } });
        break;
      case "openingHours":
        setOpeningHours({ ...openingHours, [field]: value });
        break;
      default:
        break;
    }
  };

  // Handle edit button click
  const handleEdit = (section) => {
    setEditingSection(section);
  };

  // Handle save button click
  const handleSave = async (section) => {
    // const settings = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/JSON",
    //   },
    //   body: JSON.stringify({ [section]: eval(section) }),
    // };

    const formData = new FormData();

    if (section === "basicInfo" && image) {
      formData.append("image", image);
    }

    formData.append(section, JSON.stringify(eval(section)));

    const settings = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await handleHTTPRequestWithTokenRestaurant(
        `${import.meta.env.VITE_API}/restaurants/update/profile/${loggedInRestaurant._id}/${section}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        switch (section) {
          case "basicInfo":
            setBasicInfo(data.basicInfo);
            setOriginalBasicInfo(data.basicInfo);
            break;
          case "contact":
            setContact(data.basicInfo.contact);
            setOriginalContact(data.basicInfo.contact);
            break;
          case "address":
            setAddress(data.basicInfo.address);
            setOriginalAddress(data.basicInfo.address);
            break;
          case "digitalPresence":
            setDigitalPresence(data.digitalPresence);
            setOriginalDigitalPresence(data.digitalPresence);
            break;
          case "openingHours":
            setOpeningHours(data.openAndCloseHours);
            setOriginalOpeningHours(data.openAndCloseHours);
            break;
          default:
            break;
        }
        setEditingSection(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Handle cancel button click
  const handleCancel = (section) => {
    switch (section) {
      case "basicInfo":
        setBasicInfo(originalBasicInfo);
        break;
      case "contact":
        setContact(originalContact);
        break;
      case "address":
        setAddress(originalAddress);
        break;
      case "digitalPresence":
        setDigitalPresence(originalDigitalPresence);
        break;
      case "openingHours":
        setOpeningHours(originalOpeningHours);
        break;
      default:
        break;
    }
    setEditingSection(null);
  };

  async function handleDeleteAccount() {
    if (confirm("Are you sure you want to delete your account? Everything about your restaurant will be deleted")) {
      try {
        const response = await handleHTTPRequestWithTokenRestaurant(
          `${import.meta.env.VITE_API}/restaurants/deleteRestaurantAccount/${loggedInRestaurant._id}`,
          { method: "DELETE", credentials: "include" }
        );

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setLoggedInRestaurant(null);
          setToggleRegisterOrLoginRestaurant(false);
          navigate("/rs-register");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    }
  }

  return (
    <div className="rs-profile-container">
      <div className="basic-info">
        <h3>Basic Info</h3>
        <div className="rs-profile-section">
          {editingSection === "basicInfo" ? (
            <>
              <div className="label">
                <strong>Business Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessName}
                  onChange={(e) => handleInputChange("basicInfo", "businessName", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Business ID:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessId}
                  onChange={(e) => handleInputChange("basicInfo", "businessId", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Owner:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.owner}
                  onChange={(e) => handleInputChange("basicInfo", "owner", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Venue Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.venueName}
                  onChange={(e) => handleInputChange("basicInfo", "venueName", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Cover Image:</strong>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                  ref={imageInput}
                />
              </div>
              <div className="buttons-container">
                <button className="cancel-button" onClick={() => handleCancel("basicInfo")}>
                  Cancel
                </button>
                <button className="save-button" onClick={() => handleSave("basicInfo")}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="label">
                <strong>Business Name:</strong> {basicInfo.businessName}
              </div>
              <div className="label">
                <strong>Business ID:</strong> {basicInfo.businessId}
              </div>
              <div className="label">
                <strong>Owner:</strong> {basicInfo.owner}
              </div>
              <div className="label">
                <strong>Venue Name:</strong> {basicInfo.venueName}
              </div>
              <div className="label-image">
                <strong>Cover Image:</strong>
                <div className="image-container">
                  <img
                    src={
                      basicInfo.coverImage.startsWith("uploads")
                        ? `${import.meta.env.VITE_API}/${basicInfo.coverImage}`
                        : basicInfo.coverImage
                    }
                    alt=""
                  />
                </div>
              </div>
              <button className="edit-button" onClick={() => handleEdit("basicInfo")}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      <div className="contact-information">
        <h3>Contact Information</h3>
        <div className="rs-profile-section">
          {editingSection === "contact" ? (
            <>
              <div className="label">
                <strong>Email:</strong>{" "}
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => handleInputChange("contact", "email", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Phone Number:</strong>{" "}
                <input
                  type="text"
                  value={contact.phoneNumber}
                  onChange={(e) => handleInputChange("contact", "phoneNumber", e.target.value)}
                />
              </div>
              <div className="buttons-container">
                <button className="cancel-button" onClick={() => handleCancel("contact")}>
                  Cancel
                </button>
                <button className="save-button" onClick={() => handleSave("contact")}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="label">
                <strong>Email:</strong> {contact.email}
              </div>
              <div className="label">
                <strong>Phone Number:</strong> {contact.phoneNumber}
              </div>
              <button className="edit-button" onClick={() => handleEdit("contact")}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      <div className="address">
        <h3>Address</h3>
        <div className="rs-profile-section">
          {editingSection === "address" ? (
            <>
              <div className="label">
                <strong>Street:</strong>{" "}
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => handleInputChange("address", "street", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>City:</strong>{" "}
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleInputChange("address", "city", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>State:</strong>{" "}
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => handleInputChange("address", "state", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Postal Code:</strong>{" "}
                <input
                  type="text"
                  value={address.postalCode}
                  onChange={(e) => handleInputChange("address", "postalCode", e.target.value)}
                />
              </div>
              <div className="buttons-container">
                <button className="cancel-button" onClick={() => handleCancel("address")}>
                  Cancel
                </button>
                <button className="save-button" onClick={() => handleSave("address")}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="label">
                <strong>Street:</strong> {address.street}
              </div>
              <div className="label">
                <strong>City:</strong> {address.city}
              </div>
              <div className="label">
                <strong>State:</strong> {address.state}
              </div>
              <div className="label">
                <strong>Postal Code:</strong> {address.postalCode}
              </div>
              <button className="edit-button" onClick={() => handleEdit("address")}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      <div className="digital-presence">
        <h3>Digital Presence</h3>
        <div className="rs-profile-section">
          {editingSection === "digitalPresence" ? (
            <>
              <div className="label">
                <strong>Facebook:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.facebook}
                  onChange={(e) => handleInputChange("digitalPresence", "facebook", e.target.value)}
                />
              </div>
              <div className="label">
                <strong>Instagram:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.instagram}
                  onChange={(e) => handleInputChange("digitalPresence", "instagram", e.target.value)}
                />
              </div>
              <div className="buttons-container">
                <button className="cancel-button" onClick={() => handleCancel("digitalPresence")}>
                  Cancel
                </button>
                <button className="save-button" onClick={() => handleSave("digitalPresence")}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="label">
                <strong>Facebook:</strong> {digitalPresence.socialMedia.facebook}
              </div>
              <div className="label">
                <strong>Instagram:</strong> {digitalPresence.socialMedia.instagram}
              </div>
              <button className="edit-button" onClick={() => handleEdit("digitalPresence")}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <div className="rs-profile-section">
          {editingSection === "openingHours" ? (
            <>
              <div className="label">
                <strong>Monday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.monday}
                  onChange={(e) => handleInputChange("openingHours", "monday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Tuesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.tuesday}
                  onChange={(e) => handleInputChange("openingHours", "tuesday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Wednesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.wednesday}
                  onChange={(e) => handleInputChange("openingHours", "wednesday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Thursday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.thursday}
                  onChange={(e) => handleInputChange("openingHours", "thursday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Friday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.friday}
                  onChange={(e) => handleInputChange("openingHours", "friday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Saturday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.saturday}
                  onChange={(e) => handleInputChange("openingHours", "saturday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="label">
                <strong>Sunday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.sunday}
                  onChange={(e) => handleInputChange("openingHours", "sunday", e.target.value)}
                  placeholder="eg. 11:00AM - 10:00PM"
                />
              </div>
              <div className="buttons-container">
                <button className="cancel-button" onClick={() => handleCancel("openingHours")}>
                  Cancel
                </button>
                <button className="save-button" onClick={() => handleSave("openingHours")}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="label">
                <strong>Monday:</strong> {openingHours.monday}
              </div>
              <div className="label">
                <strong>Tuesday:</strong> {openingHours?.tuesday}
              </div>
              <div className="label">
                <strong>Wednesday:</strong> {openingHours.wednesday}
              </div>
              <div className="label">
                <strong>Thursday:</strong> {openingHours.thursday}
              </div>
              <div className="label">
                <strong>Friday:</strong> {openingHours.friday}
              </div>
              <div className="label">
                <strong>Saturday:</strong> {openingHours.saturday}
              </div>
              <div className="label">
                <strong>Sunday:</strong> {openingHours.sunday}
              </div>
              <button className="edit-button" onClick={() => handleEdit("openingHours")}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      <button onClick={handleDeleteAccount} className="delete-account-button">
        Delete Account
      </button>
    </div>
  );
}

export default RSProfile;
