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

  console.log(pizzas);
  return restoWithPizza;
};
