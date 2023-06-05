import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty inputs
    if (
      recipe.name.trim() === "" ||
      recipe.cuisine.trim() === "" ||
      recipe.photo.trim() === "" ||
      recipe.ingredients.trim() === "" ||
      recipe.preparation.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

  
    if (!isValidImageUrl(recipe.photo)) {
      setError("Please enter a valid image URL.");
      return;
    }

    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
    setError("");
  };

  const isValidImageUrl = (url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="name_td">
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </td>
            <td className="cuisine_td">
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
              />
            </td>
            <td className="photo_td">
              <input
                type="url"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                placeholder="Photo URL"
              />
            </td>
            <td className="content_td">
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
              ></textarea>
            </td>
            <td className="content_td">
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                placeholder="Preparation"
              ></textarea>
            </td>
            <td className="actions_td">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default RecipeCreate;
