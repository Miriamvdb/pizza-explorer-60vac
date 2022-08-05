import { useSelector } from "react-redux";
import { selectRestoWithPizza } from "../store/selectors";

const RestaurantList = () => {
  const allRestaurants = useSelector(selectRestoWithPizza);
  console.log(allRestaurants);

  return (
    <div style={{ borderTop: "1px solid tomato", marginTop: "3rem" }}>
      <h1>Restaurants</h1>
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
      })}
    </div>
  );
};

export default RestaurantList;
