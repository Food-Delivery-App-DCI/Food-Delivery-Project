import { useContext, useRef, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

//* NB: We are using the styles of RSMenu.css for styling this component

function RSOffers() {
  const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
  const [newOfferName, setNewOfferName] = useState("");
  const [newOffer, setNewOffer] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
  const [newItemForEdit, setNewItemForEdit] = useState("");
  const [newOfferData, setNewOfferData] = useState({});
  const [toAddNewOffer, setToAddNewOffer] = useState(false);
  const [toAddNewItem, setToAddNewItem] = useState(false);
  const [toggleAddNewOffer, setToggleAddNewOffer] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(true);
  const [editingOfferName, setEditingOfferName] = useState(null);
  const [newOfferNameChange, setNewOfferNameChange] = useState("");
  const [image, setImage] = useState("");
  const imageInput = useRef(null);
  const editedImageInput = useRef(null);

  function handleNewItemChange(e) {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  }

  function handleInputChange(index, field, value) {
    if (field === "price") {
      value = parseFloat(value) || 0;
    }
    const updatedItems = [...newOfferData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setNewOfferData({ ...newOfferData, items: updatedItems });
  }

  function handleImageChange(e, index) {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const updatedItems = [...newOfferData.items]; // Copy the current items
      updatedItems[index].newImage = file; // Set the newImage property for the specific item
      setNewOfferData({ ...newOfferData, items: updatedItems }); // Update state with the new data
    }
  }

  function handleNewItemForEditChange(e) {
    const { name, value } = e.target;
    setNewItemForEdit({ ...newItemForEdit, [name]: value });
  }

  async function handleSaveClick() {
    const updatedOfferData = { ...newOfferData, category: newOfferNameChange };

    const updatedItems = await Promise.all(
      updatedOfferData.items.map(async (item) => {
        let imageURL = item.image;

        if (item.newImage) {
          const formData = new FormData();
          formData.append("image", item.newImage);

          const imageUploadResponse = await fetch(`${import.meta.env.VITE_API}/restaurants/upload-image`, {
            method: "POST",
            body: formData,
          });

          if (imageUploadResponse.ok) {
            const imageData = await imageUploadResponse.json();
            imageURL = imageData.cloudImageUrl;
          }
        }

        return { ...item, image: imageURL };
      })
    );

    updatedOfferData.items = updatedItems;

    const updatedOffer = loggedInRestaurant.promotionalInfo.currentOffers.map((offer) =>
      offer.category === editingOfferName ? updatedOfferData : offer
    );

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offer: updatedOffer }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/update/offers/${loggedInRestaurant._id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingOfferName(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleAddNewOffer(e) {
    e.preventDefault();

    const updatedNewOffer = [...newOffer, newItem];
    const newOfferToSend = { category: newOfferName, items: updatedNewOffer };

    const updatedOffer = [...loggedInRestaurant.promotionalInfo.currentOffers, newOfferToSend];

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offer: updatedOffer }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/update/offers/${loggedInRestaurant._id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setNewOfferName("");
        setNewOffer([]);
        setToAddNewOffer(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setNewItem({ name: "", description: "", price: "" });
    setToggleAddNewOffer(false);
  }

  async function handleAddNewItemForEdit(e) {
    e.preventDefault();

    //* Upload new item image if available
    let imageURL = "";
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      const imageUploadResponse = await fetch(`${import.meta.env.VITE_API}/restaurants/upload-image`, {
        method: "POST",
        body: formData,
      });
      if (imageUploadResponse.ok) {
        const imageData = await imageUploadResponse.json();
        imageURL = imageData.cloudImageUrl;
      }
    }

    const updatedItems = [...newOfferData.items, { ...newItemForEdit, image: imageURL }];

    setNewOfferData({ ...newOfferData, items: updatedItems });
    setNewItemForEdit({ name: "", description: "", price: "", image: "" });
    setToAddNewItem(false);
    setToggleAdd(true);
    setImage("");
    imageInput.current.value = "";
    editedImageInput.current.value = "";
  }

  async function handleDeleteOffer(offer) {
    if (confirm("Are you sure you want to delete this offer? All items will be deleted.")) {
      const updatedOffer = loggedInRestaurant.promotionalInfo.currentOffers.filter(
        (eachOffer) => eachOffer.category !== offer
      );

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer: updatedOffer }),
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/restaurants/update/offers/${loggedInRestaurant._id}`,
          settings
        );

        if (response.ok) {
          const data = await response.json();
          setLoggedInRestaurant(data);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  function handleDeleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
      const updatedItems = newOfferData.items.filter((_, i) => i !== index);
      setNewOfferData({ ...newOfferData, items: updatedItems });
    }
  }

  function handleCancelClick() {
    setEditingOfferName(null);
    setNewItemForEdit({ name: "", description: "", price: "" });
    setToggleAdd(true);
    setToAddNewItem(false);
  }

  function handleEditClick(category) {
    setEditingOfferName(category);
    const offerData = loggedInRestaurant.promotionalInfo.currentOffers.find((offer) => offer.category === category);
    setNewOfferData({ ...offerData });
    setNewOfferNameChange(category); // Set the current category name for editing
  }

  return (
    <div>
      <h3>Promotions Info</h3>
      <button
        onClick={() => {
          setToAddNewOffer(!toAddNewOffer);
          setToggleAddNewOffer(!toggleAddNewOffer);
        }}
        className="create-new-menu-button"
      >
        {!toggleAddNewOffer ? "Create New Offer" : "Cancel"}
      </button>
      {toAddNewOffer && (
        <>
          <h3>Add New Offer</h3>
          <form onSubmit={handleAddNewOffer} className="add-menu-form">
            <div className="inputs-container">
              <input
                type="text"
                name="newOfferName"
                value={newOfferName}
                onChange={(e) => setNewOfferName(e.target.value)}
                placeholder="New Offer"
                required
              />
              {newOffer.map((item, index) => (
                <div key={index} className="new-item">
                  <p>
                    {item.name} - {item.description} - €{Number(item.price).toFixed(2)}
                  </p>
                </div>
              ))}
              <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleNewItemChange}
                placeholder="Item Name"
                required
              />
              <input
                type="text"
                name="description"
                value={newItem.description}
                onChange={handleNewItemChange}
                placeholder="Item Description"
                required
              />
              <input
                type="number"
                step="0.01"
                name="price"
                value={newItem.price}
                onChange={handleNewItemChange}
                placeholder="Item Price"
                required
              />
            </div>
            <button>Add Offer</button>
          </form>
        </>
      )}
      {loggedInRestaurant.promotionalInfo.currentOffers.length !== 0 && (
        <>
          <h2 style={{ textAlign: "center", margin: "2rem 0" }}> Current Offers</h2>
          {loggedInRestaurant.promotionalInfo.currentOffers.map((offer) => {
            return (
              <div key={offer._id} className="menu-category">
                <div className="category-header">
                  {editingOfferName === offer.category ? (
                    <>
                      <label>
                        Offer Name:
                        <input
                          type="text"
                          value={newOfferNameChange}
                          onChange={(e) => setNewOfferNameChange(e.target.value)}
                          placeholder="Edit Offer Name"
                          className="edit-category-name-input"
                        />
                      </label>
                      <MdOutlineDeleteForever
                        onClick={() => handleDeleteOffer(offer.category)}
                        size="2.5rem"
                        className="delete-icon"
                      />
                    </>
                  ) : (
                    <h2>{offer.category}</h2>
                  )}
                </div>

                {editingOfferName === offer.category ? (
                  <div className="edit-form">
                    {newOfferData.items.map((item, index) => (
                      <div key={index} className="edit-item">
                        <img src={item.image} alt="" width={100} />
                        <div className="labels-container">
                          <label>
                            Name:
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            />
                          </label>
                          <label>
                            Description:
                            <input
                              type="text"
                              value={item.description}
                              onChange={(e) => handleInputChange(index, "description", e.target.value)}
                            />
                          </label>
                        </div>
                        <div className="labels-container">
                          <label className="price-label">
                            Price:
                            <input
                              type="number"
                              className="price"
                              step="0.01"
                              value={item.price}
                              onChange={(e) => handleInputChange(index, "price", e.target.value)}
                            />
                          </label>
                          <label>
                            Image:
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, index)}
                              ref={editedImageInput}
                            />
                          </label>
                        </div>
                        <MdOutlineDeleteForever
                          onClick={() => handleDeleteItem(index)}
                          size="2.5rem"
                          className="delete-icon"
                          title="delete item"
                        />
                      </div>
                    ))}
                    <div className="add-item-container">
                      {toggleAdd ? (
                        <FaSquarePlus
                          className="add-icon"
                          size="4rem"
                          onClick={() => {
                            setToAddNewItem(!toAddNewItem);
                            setToggleAdd(false);
                          }}
                        />
                      ) : (
                        <FaSquareMinus
                          className="add-icon"
                          size="4rem"
                          onClick={() => {
                            setToAddNewItem(!toAddNewItem);
                            setToggleAdd(true);
                          }}
                        />
                      )}

                      {toAddNewItem && (
                        <form className="new-item-form" onSubmit={handleAddNewItemForEdit}>
                          <input
                            type="text"
                            name="name"
                            value={newItemForEdit.name}
                            onChange={handleNewItemForEditChange}
                            placeholder="Item Name"
                            required
                          />
                          <input
                            type="text"
                            name="description"
                            value={newItemForEdit.description}
                            onChange={handleNewItemForEditChange}
                            placeholder="Item Description"
                            required
                          />
                          <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={newItemForEdit.price}
                            onChange={handleNewItemForEditChange}
                            placeholder="Item Price"
                            required
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                            ref={imageInput}
                          />
                          <button>Add Item</button>
                        </form>
                      )}
                    </div>

                    <div className="buttons-container">
                      <button className="cancel1-button" onClick={handleCancelClick}>
                        Cancel
                      </button>
                      <button className="save1-button" onClick={handleSaveClick}>
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  offer.items.map((item) => {
                    return (
                      <div key={item._id} className="menu-item">
                        <div className="image-and-info-container">
                          <div className="image-container">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="item-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="item-price">€{Number(item.price).toFixed(2)}</div>
                      </div>
                    );
                  })
                )}
                {editingOfferName !== offer.category && (
                  <button className="edit-button" onClick={() => handleEditClick(offer.category)}>
                    Edit
                  </button>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default RSOffers;
