import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Profile from '../pages/Profile';


describe('A página Profile', () => {
  it('deve constar o email do usuario na tela', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
    userEvent.click(screen.getByTestId('profile-top-btn'));
    const emailEl = screen.getByTestId('profile-email')
    expect(emailEl).toBeInTheDocument();
  })

  it('deve ter três botões: Done Recipes, Favorite Recipes e Logout', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
    userEvent.click(screen.getByTestId('profile-top-btn'));
    const doneRecipes = screen.getByTestId('profile-done-btn');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId('profile-logout-btn');

    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  })

  it('deve ser redirecionada à página Done Recipes ao clicar no botão respectivo', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
    userEvent.click(screen.getByTestId('profile-top-btn'));

    userEvent.click(screen.getByTestId('profile-done-btn'));
    expect(history.location.pathname).toBe('/done-recipes');
  })

  it('deve ser redirecionada à página Favorite Recipes ao clicar no botão respectivo', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
    userEvent.click(screen.getByTestId('profile-top-btn'));
    userEvent.click(screen.getByTestId('profile-favorite-btn'));
    expect(history.location.pathname).toBe('/favorite-recipes');
  })

  it('deve ser redirecionada à página principal ao clicar em Logout', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
    userEvent.click(screen.getByTestId('profile-top-btn'));
    userEvent.click(screen.getByTestId('profile-logout-btn'));
    expect(history.location.pathname).toBe('/');
  })
})

describe('Testa profile renderizando direto', () => {
  it('deve constar o email do usuario na tela', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile')
    const emailEl = screen.getByTestId('profile-email')
    expect(emailEl).toBeInTheDocument();
  })

})
