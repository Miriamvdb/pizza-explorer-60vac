import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import {
  selectAllPizzas,
  selectAmountOfPizzas,
} from "../store/pizzas/selectors";
import AddNewPizza from "./AddNewPizza";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { toggleFav } from "../store/user/slice";
import "./PizzaList.scss";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const amountOfPizzas = useSelector(selectAmountOfPizzas);
  const allPizzas = useSelector(selectAllPizzas);
  const dispatch = useDispatch();

  return (
    <div className="pizza-list">
      <h1 style={{ fontSize: "50px" }}>Pizza Explorer</h1>
      <p style={{ fontSize: "15px" }}>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <br />
      <h2>Pizza's ({amountOfPizzas})</h2>
      <div className="pizzas">
        {allPizzas.map((pizza, index) => {
          return (
            <div key={index}>
              <div className="fav-and-title">
                <button
                  onClick={() => dispatch(toggleFav(pizza.id))}
                  className="fav-toggle"
                >
                  {user.favorites.includes(pizza.id) ? (
                    <BsSuitHeartFill
                      style={{ fontSize: "15px", color: "tomato" }}
                    />
                  ) : (
                    <BsSuitHeart
                      style={{ fontSize: "15px", color: "tomato" }}
                    />
                  )}
                </button>
                <h3>{pizza.name}</h3>
              </div>
              <div
                className="pizza"
                style={{ backgroundImage: `url(${pizza.image})` }}
              >
                <div className="overlay">
                  <p>
                    <b>Description: </b>
                    {pizza.description}
                  </p>
                  <p>
                    <b>Bought: </b>
                    {pizza.bought}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <br />
        <AddNewPizza />
      </div>
    </div>
  );
};

export default PizzaList;
