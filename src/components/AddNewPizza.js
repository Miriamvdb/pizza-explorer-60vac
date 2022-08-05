import { useState } from "react";
import { useDispatch } from "react-redux"; // 2a. import useDispatch
import { submitNewPizza } from "../store/pizzas/slice"; // 4.

const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch(); // 2b. import useDispatch

  const submitPizza = (event) => {
    event.preventDefault();
    console.log("New pizza: ", name, description);

    // 3. Create an object with name and description and
    // pass "newPizza" to the action as a parameter (below)
    const newPizza = {
      name,
      description,
    };

    // 4. Dispatch the action with the new action creator
    // and send the newPizza to the store
    dispatch(submitNewPizza(newPizza));

    // 5. Clear the input-fields
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add a new pizza</h2>
      <div className="form-new-pizza">
        <form onSubmit={submitPizza}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name pizza"
          />
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description pizza"
          />
          <button type="submit">Add new pizza</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPizza;
