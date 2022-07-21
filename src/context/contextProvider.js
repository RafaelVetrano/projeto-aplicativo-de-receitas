import React from 'react';
import PropTypes from 'prop-types';
import globalContext from './globalContext';
import useCustomHook from '../hook/useCustomHook';

function GlobalProvider({ children }) {
  const { title,
    setTitle,
    showSearch,
    setShowSearch,
    dataFoods,
    setDataFoods,
    dataDrinks,
    setDataDrinks,
    mealID,
    setMealID,
    drinkID,
    setDrinkID,
    foodsCategories,
    setFoodsCategories,
    drinksCategories,
    setDrinksCategories,
    currentID,
    setCurrentID,
    mealDetails,
    setMealDetails,
    drinkDetails,
    setDrinkDetails } = useCustomHook();

  const value = {
    title,
    setTitle,
    showSearch,
    setShowSearch,
    dataFoods,
    setDataFoods,
    dataDrinks,
    setDataDrinks,
    mealID,
    setMealID,
    drinkID,
    setDrinkID,
    foodsCategories,
    setFoodsCategories,
    drinksCategories,
    setDrinksCategories,
    currentID,
    setCurrentID,
    mealDetails,
    setMealDetails,
    drinkDetails,
    setDrinkDetails };

  return (
    <globalContext.Provider value={ value }>
      {children}
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
