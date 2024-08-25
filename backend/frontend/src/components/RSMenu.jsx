import "../style/RSMenu.css";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import RSOffers from "./RSOffers";
import CarLoader from "./CarLoader";

function RSMenu() {
  const { loggedInRestaurant, setLoggedInRestaurant, loading, setLoading } = useContext(DataContext);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newMenuData, setNewMenuData] = useState({});
  const [newCategory, setNewCategory] = useState("");
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
  const [newItemForEdit, setNewItemForEdit] = useState({ name: "", description: "", price: "" });
  const [newMenu, setNewMenu] = useState([]);
  const [toAddNewMenu, setToAddNewMenu] = useState(false);
  const [toAddNewItem, setToAddNewItem] = useState(false);
  const [editingKeywords, setEditingKeywords] = useState(false);
  const [newKeywords, setNewKeywords] = useState(loggedInRestaurant.keywords || []);
  const [toggleAdd, setToggleAdd] = useState(true);
  const [toggleAddNewMenu, setToggleAddNewMenu] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [image, setImage] = useState("");
  const imageInput = useRef(null);
  const editedImageInput = useRef(null);

  // console.log("new menu data:", newMenuData);

  useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/restaurants/${loggedInRestaurant._id}`);
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
    if (loggedInRestaurant && !loggedInRestaurant.menu) {
      getRestaurant();
    }
  }, [loggedInRestaurant, setLoggedInRestaurant]);

  const handleEditClick = (category) => {
    setEditingCategory(category);
    const categoryData = loggedInRestaurant.menu.find((cat) => cat.category === category);
    setNewMenuData({ ...categoryData });
    setNewCategoryName(category); // Set the current category name for editing
  };

  // New function to handle category name change
  const handleCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleInputChange = (index, field, value) => {
    if (field === "price") {
      value = parseFloat(value) || 0;
    }
    const updatedItems = [...newMenuData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setNewMenuData({ ...newMenuData, items: updatedItems });
  };

  const handleDeleteCategory = async (category) => {
    if (confirm("Are you sure you want to delete this category? All items will be deleted.")) {
      const updatedMenu = loggedInRestaurant.menu.filter((cat) => cat.category !== category);

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu: updatedMenu }),
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/restaurants/update/menu/${loggedInRestaurant._id}`,
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
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const updatedItems = [...newMenuData.items]; // Copy the current items
      updatedItems[index].newImage = file; // Set the newImage property for the specific item
      setNewMenuData({ ...newMenuData, items: updatedItems }); // Update state with the new data
    }
  };

  const handleSaveClick = async () => {
    // Start loading
    setLoading(true);

    const updatedMenuData = { ...newMenuData, category: newCategoryName };

    const updatedItems = await Promise.all(
      updatedMenuData.items.map(async (item) => {
        let imageURL = item.image;

        if (item.newImage) {
          const formData = new FormData();
          formData.append("image", item.newImage);

          try {
            const imageUploadResponse = await fetch(`${import.meta.env.VITE_API}/restaurants/upload-image`, {
              method: "POST",
              body: formData,
            });

            if (imageUploadResponse.ok) {
              const imageData = await imageUploadResponse.json();
              imageURL = imageData.cloudImageUrl;
            } else {
              const { error } = await imageUploadResponse.json();
              throw new Error(error.message);
            }
          } catch (error) {
            if (error.status === 500) {
              console.log(error.message);
            } else {
              alert("File size is too large. File size should be less than 2MB");
            }
          }
        }

        return { ...item, image: imageURL };
      })
    );

    updatedMenuData.items = updatedItems;

    // const updatedMenuData = { ...newMenuData, category: newCategoryName };

    const updatedMenu = loggedInRestaurant.menu.map((cat) =>
      cat.category === editingCategory ? updatedMenuData : cat
    );

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: updatedMenu, keywords: newKeywords }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/update/menu/${loggedInRestaurant._id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingCategory(null);
        setEditingKeywords(false);
        // setEditedImage("");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      // Stop loading after the request is complete
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    setEditingCategory(null);
    setNewItemForEdit({ name: "", description: "", price: "" });
    setToggleAdd(true);
    setToAddNewItem(false);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleNewItemForEditChange = (e) => {
    const { name, value } = e.target;
    setNewItemForEdit({ ...newItemForEdit, [name]: value });
  };

  const handleAddNewCategory = async (e) => {
    e.preventDefault();

    //* Comment in this code if we decide to add an image the first time we are creating an item when creating a category.
    // Upload new item image if available
    // let imageURL = "";
    // if (image) {
    //   const formData = new FormData();
    //   formData.append("image", image);
    //   // Assuming there's an endpoint for uploading images
    //   const imageUploadResponse = await fetch("http://localhost:5002/restaurants/upload-image", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (imageUploadResponse.ok) {
    //     const imageData = await imageUploadResponse.json();
    //     imageURL = imageData.cloudImageUrl;
    //   }
    // }

    const updatedNewMenu = [...newMenu, newItem];

    //* Comment in this code if we decide to add an image the first time we are creating an item when creating a category.
    // const updatedNewMenu = [...newMenu, { ...newItem, image: imageURL }]; // Updated: Add image URL to item

    const newMenuCategory = { category: newCategory, items: updatedNewMenu };

    const updatedMenu = [...loggedInRestaurant.menu, newMenuCategory];

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: updatedMenu }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/update/menu/${loggedInRestaurant._id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setNewCategory("");
        setNewMenu([]);
        setToAddNewMenu(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setNewItem({ name: "", description: "", price: "", image: "" });
    setToggleAddNewMenu(false);
    setImage("");
    imageInput.current.value = "";
    editedImageInput.current.value = "";
  };

  const handleAddNewItemForEdit = async (e) => {
    e.preventDefault();

    //* Upload new item image if available
    let imageURL = "";
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const imageUploadResponse = await fetch(`${import.meta.env.VITE_API}/restaurants/upload-image`, {
          method: "POST",
          body: formData,
        });
        if (imageUploadResponse.ok) {
          const imageData = await imageUploadResponse.json();
          imageURL = imageData.cloudImageUrl;
        } else {
          const { error } = await imageUploadResponse.json();
          throw new Error(error.message);
        }
      } catch (error) {
        if (error.status === 500) {
          console.log(error.message);
        } else {
          alert("File size is too large. File size should be less than 2MB");
        }
      }
    }

    const updatedItems = [...newMenuData.items, { ...newItemForEdit, image: imageURL }]; // Updated: Add image URL to item

    setNewMenuData({ ...newMenuData, items: updatedItems });
    setNewItemForEdit({ name: "", description: "", price: "", image: "" });
    setToAddNewItem(false);
    setToggleAdd(true);
    setImage("");
    imageInput.current.value = "";
    editedImageInput.current.value = "";
  };

  const handleKeywordsChange = (index, value) => {
    const updatedKeywords = [...newKeywords];
    updatedKeywords[index] = value;
    setNewKeywords(updatedKeywords);
  };

  const addKeywordsField = () => {
    setNewKeywords([...newKeywords, ""]);
  };

  const removeKeywordsField = (index) => {
    if (newKeywords.length > 1) {
      const updatedKeywords = newKeywords.filter((_, i) => i !== index);
      setNewKeywords(updatedKeywords);
    } else {
      alert("You cannot delete a keyword. Add another keyword name before deleting");
    }
  };

  const handleSaveKeywords = async () => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: loggedInRestaurant.menu, keywords: newKeywords }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/update/menu/${loggedInRestaurant._id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingKeywords(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteItem = (index) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const updatedItems = newMenuData.items.filter((_, i) => i !== index);
      setNewMenuData({ ...newMenuData, items: updatedItems });
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <CarLoader />
      </div>
    ); // Show the spinner while checking authentication
  }

  return (
    <div className="rs-menu-container">
      <button
        onClick={() => {
          setToAddNewMenu(!toAddNewMenu);
          setToggleAddNewMenu(!toggleAddNewMenu);
        }}
        className="create-new-menu-button"
      >
        {!toggleAddNewMenu ? "Create New Category" : "Cancel"}
      </button>
      {toAddNewMenu && (
        <>
          <h3>Add New Category</h3>
          <form onSubmit={handleAddNewCategory} className="add-menu-form">
            <div className="inputs-container">
              <input
                type="text"
                name="newCategory"
                value={newCategory}
                onChange={handleNewCategoryChange}
                placeholder="New Category"
                required
              />
              {newMenu.map((item, index) => (
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
            <button>Add Category</button>
          </form>
        </>
      )}

      <>
        {editingKeywords ? (
          <div className="edit-keywords">
            <h2>Edit Keywords</h2>
            {newKeywords.map((keyword, index) => (
              <div key={index} className="change-keywords-container">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => handleKeywordsChange(index, e.target.value)}
                  placeholder="add keyword here..."
                />
                <MdOutlineDeleteForever
                  onClick={() => removeKeywordsField(index)}
                  size="2.5rem"
                  className="delete-icon"
                />
              </div>
            ))}
            <FaSquarePlus className="add-keywords-icon" size="4rem" onClick={addKeywordsField} />
            <div className="buttons-container">
              <button onClick={() => setEditingKeywords(false)} className="cancel-keywords-button">
                Cancel
              </button>
              <button onClick={handleSaveKeywords} className="save-keywords-button">
                Save Keywords
              </button>
            </div>
          </div>
        ) : (
          <div className="keywords">
            <h2>Keywords: {loggedInRestaurant.keywords.join(", ")}</h2>
            <FaEdit onClick={() => setEditingKeywords(true)} size="2rem" className="keywords-edit-icon" />
          </div>
        )}

        {loggedInRestaurant.menu.map((category) => (
          <div key={category._id} className="menu-category">
            <div className="category-header">
              {/* Conditional rendering for category name editing */}
              {editingCategory === category.category ? (
                <>
                  <label>
                    Category Name:
                    <input
                      type="text"
                      value={newCategoryName}
                      onChange={handleCategoryNameChange}
                      placeholder="Edit Category Name"
                      className="edit-category-name-input"
                    />
                  </label>
                  <MdOutlineDeleteForever
                    onClick={() => handleDeleteCategory(category.category)}
                    size="2.5rem"
                    className="delete-icon"
                  />
                </>
              ) : (
                <h2>{category.category}</h2>
              )}
            </div>

            {editingCategory === category.category ? (
              <div className="edit-form">
                {newMenuData.items.map((item, index) => (
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
                      <label className="image-label">
                        Image:
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, index)}
                            ref={editedImageInput}
                          />
                          <p>File size should be less than 2MB</p>
                        </div>
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
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImage(e.target.files[0])}
                          required
                          ref={imageInput}
                        />
                        <p style={{ fontSize: "1.4rem" }}>File size should be less than 2MB</p>
                      </div>
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
              category.items.map((item) => (
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
              ))
            )}
            {editingCategory !== category.category && (
              <button className="edit-button" onClick={() => handleEditClick(category.category)}>
                Edit
              </button>
            )}
          </div>
        ))}

        <RSOffers />
      </>
    </div>
  );
}

export default RSMenu;
