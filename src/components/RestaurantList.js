import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllPizzas } from "../store/pizzas/selectors";
import {
  selectAllRestaurants,
  selectRestoThatSellPizza,
} from "../store/restaurants/selectors";
import {
  selectPizzaSoldByResto,
  //   selectRestoWithPizza,
} from "../store/selectors";

const RestaurantList = () => {
  //   const allRestaurants = useSelector(selectRestoWithPizza)
  const allRestaurants = useSelector(selectAllRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    allRestaurants[0].id
  );
  const pizzasSold = useSelector(selectPizzaSoldByResto(selectedRestaurant));
  const allPizzas = useSelector(selectAllPizzas);
  const [selectedPizza, setSelectedPizza] = useState(allPizzas[0].id); // 1.
  const sellsPizza = useSelector(selectRestoThatSellPizza(selectedPizza)); // 3.
  console.log(pizzasSold);

  return (
    <div style={{ borderTop: "1px solid tomato", marginTop: "3rem" }}>
      {/* <h1>Restaurants</h1>
      {allRestaurants.map((resto, index) => {
        return (
          <div key={index}>
            <h3>{resto.name}</h3>
            <ul>
              {resto.pizzas.map((pizza, index) => {
                return <div key={index}>{pizza.name}</div>;
              })}
            </ul>
          </div>
        );
      })} */}
      <div>
        <h2>What pizza does this restaurant sell?</h2>
        <form>
          <select
            value={selectedRestaurant}
            onChange={(event) =>
              setSelectedRestaurant(parseInt(event.target.value))
            }
          >
            <option defaultValue="">All restaurants</option>
            {allRestaurants.map((resto) => {
              return (
                <option key={resto.id} value={resto.id}>
                  {resto.name}
                </option>
              );
            })}
          </select>
        </form>
        <ul>
          {pizzasSold.map((pizza) => {
            return <li key={pizza.id}>{pizza.name}</li>;
          })}
        </ul>
      </div>
      <div>
        {/* 1. Make select field, where user can pick a pizza */}
        <form>
          <h2>Who sells: </h2>
          <select
            value={selectedPizza}
            onChange={(event) => setSelectedPizza(parseInt(event.target.value))}
          >
            <option defaultValue="">All pizza's</option>
            {allPizzas.map((pizza) => {
              return (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              );
            })}
          </select>
        </form>
        {/* 3. Show a list with restaurant that sells the selected pizza  */}
        <ul>
          {sellsPizza.map((restoWithPizza) => {
            return <li key={restoWithPizza.id}>{restoWithPizza.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantList;
