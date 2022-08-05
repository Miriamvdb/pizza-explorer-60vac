export const selectAllRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((restoA, restoB) =>
    restoA.name.localeCompare(restoB.name)
  );
};
