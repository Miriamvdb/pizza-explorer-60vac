export const selectRestoWithPizza = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  // Go through each restaurant
  const restoWithPizza = restaurants.map((resto) => {
    // For each pizza array inside a restaurant we replace
    // it with the pizza objects from the allPizzas array
    const replacePizzas = resto.pizzas.map((pizzaId) =>
      pizzas.find((fullPizza) => pizzaId === fullPizza.id)
    );

    // Return the same restaurant object but with a
    // switched pizzas array
    return { ...resto, pizzas: replacePizzas };
  });

  return restoWithPizza;
};

export const selectPizzaSoldByResto = (restaurantId) => (reduxState) => {
  // get id's of pizzas sold
  const restaurant = reduxState.restaurants.all.find(
    (resto) => resto.id === restaurantId
  );

  const { allPizzas } = reduxState.pizzas;
  // replace them with the actual objects from the all pizzas array
  return restaurant.pizzas.map((pizzaId) =>
    allPizzas.find((pizza) => pizza.id === pizzaId)
  );
};
