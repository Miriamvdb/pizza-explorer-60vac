import { useState } from "react";
import { useDispatch } from "react-redux"; // 2a. import useDispatch
import { submitNewPizza } from "../store/pizzas/slice";

const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitPizza = (event) => {
    event.preventDefault();
    console.log("New pizza: ", name, description);

    const newPizza = {
      name,
      description,
    };

    dispatch(submitNewPizza(newPizza));

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
