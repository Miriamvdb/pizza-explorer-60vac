import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../store/restaurants/selectors";

const RestaurantList = () => {
  const allRestaurants = useSelector(selectAllRestaurants);
  console.log(allRestaurants);

  return (
    <div style={{ borderTop: "1px solid tomato", marginTop: "3rem" }}>
      <h1>Restaurants</h1>
      {allRestaurants ? (
        allRestaurants.map((resto, index) => {
          return (
            <div key={index}>
              <h3>{resto.name}</h3>
            </div>
          );
        })
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default RestaurantList;
