export const selectAllRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((restoA, restoB) =>
    restoA.name.localeCompare(restoB.name)
  );
};

// 2. Now we want the component to show a list of the restaurants that sell that pizza
export const selectRestoThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.all.filter((resto) =>
    resto.pizzas.includes(pizzaId)
  );
};
