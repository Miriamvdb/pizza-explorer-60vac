import { useDispatch, useSelector } from "react-redux"; // 3.
import { selectUser } from "../store/user/selectors";
import {
  selectAllPizzas,
  selectAmountOfPizzas,
} from "../store/pizzas/selectors";
import AddNewPizza from "./AddNewPizza";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { toggleFav } from "../store/user/slice";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const amountOfPizzas = useSelector(selectAmountOfPizzas);
  const allPizzas = useSelector(selectAllPizzas);
  const dispatch = useDispatch(); // 3.

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <h2>Pizza's ({amountOfPizzas})</h2>
      {allPizzas.map((pizza, index) => {
        return (
          <div key={index}>
            <h3>{pizza.name}</h3>
            {/* 1. Add a heart next to each pizza (fav or not) */}

            {/* 4. Dispatch it from the heart-button, we'll pass in */}
            {/* the id of the current pizza as a parameter so we can */}
            {/* add it as a favorite next! */}
            <button onClick={() => dispatch(toggleFav(pizza.id))}>
              {user.favorites.includes(pizza.id) ? (
                <BsSuitHeartFill />
              ) : (
                <BsSuitHeart />
              )}
            </button>

            <p>
              <b>Description: </b>
              {pizza.description}
            </p>
            <p>
              <b>Bought: </b>
              {pizza.bought}
            </p>
            <img src={pizza.image} alt={pizza.name} />
          </div>
        );
      })}
      <div>
        <AddNewPizza />
      </div>
    </div>
  );
};

export default PizzaList;
