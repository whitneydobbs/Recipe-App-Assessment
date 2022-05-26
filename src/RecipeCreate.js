import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = event => setName(event.target.value);
  const handleCuisineChange = event => setCuisine(event.target.value);
  const handlePhotoChange = event => setPhoto(event.target.value);
  const handleIngredientsChange = event => setIngredients(event.target.value);
  const handlePreparationChange = event => setPreparation(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation
    };
    addRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    console.log(newRecipe);
  };
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                required={true}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
                size="10"
              />
            </td>
            <td>
              <input
                id="cuisine"
                required={true}
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
                size="10"
              />
            </td>
            <td>
              <input
                id="photo"
                required={true}
                type="text"
                name="photo"
                placeholder="Photo"
                onChange={handlePhotoChange}
                value={photo}
                size="10"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                required={true}
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
                size="10"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                required={true}
                type="text"
                name="preparation"
                placeholder="Preperation"
                onChange={handlePreparationChange}
                value={preparation}
                size="10"
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;