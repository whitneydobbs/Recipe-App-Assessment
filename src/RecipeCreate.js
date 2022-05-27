import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");


  const handleName = ({ target }) => setName(target.value);
  const handleCuisine = ({ target }) => setCuisine(target.value);
  const handlePhoto = ({ target }) => setPhoto(target.value);
  const handleIngredients = ({ target }) => setIngredients(target.value);
  const handlePreparation = ({ target }) => setPreparation(target.value);
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        name,
        cuisine,
        photo,
        ingredients,
        preparation
      }
      setRecipes((currentRecipes) => [...currentRecipes, data]);
      setName("");
      setCuisine("");
      setPhoto("");
      setIngredients("");
      setPreparation("");
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>

              <input
                id="name"
                name="name"
                required={true}
                value={name}
                onChange={handleName}
                placeholder="Name"
              />
              </td>
              <td>
              <input
                id="cuisine"
                name="cuisine"
                required={true}
                value={cuisine}
                onChange={handleCuisine}
                placeholder="Cuisine"
              />
              </td>
              <td>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                value={photo}
                onChange={handlePhoto}
                placeholder="url"
              />
              </td>
              <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                required={true}
                value={ingredients}
                onChange={handleIngredients}
                placeholder="Ingredients"
              />
              </td>
              <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                required={true}
                value={preparation}
                onChange={handlePreparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;