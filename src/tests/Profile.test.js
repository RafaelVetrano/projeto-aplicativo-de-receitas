import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe('A página Profile', () => {
  //beforeEach

  it('deve ter três botões: Done Recipes, Favorite Recipes e Logout', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByRole('button');
    const doneRecipes = screen.getByTestId('profile-done-btn');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId('profile-logout-btn');

    expect(buttons).toHaveLength(3);
    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  })

  it('deve ser redirecionada à página Done Recipes ao clicar no botão respectivo', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByTestId('profile-done-btn'));
    expect(history.location.pathname).toBe('/done-recipes');
  })

  it('deve ser redirecionada à página Favorite Recipes ao clicar no botão respectivo', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByTestId('profile-favorite-btn'));
    expect(history.location.pathname).toBe('/favorite-recipes');
  })

  it('deve ser redirecionada à página principal ao clicar em Logout', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByTestId('profile-logout-btn'));
    expect(history.location.pathname).toBe('/');
  })
})
