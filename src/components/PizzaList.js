import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import {
  selectAllPizzas,
  selectAmountOfPizzas,
} from "../store/pizzas/selectors";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const amountOfPizzas = useSelector(selectAmountOfPizzas);
  const allPizzas = useSelector(selectAllPizzas);

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
    </div>
  );
};

export default PizzaList;
