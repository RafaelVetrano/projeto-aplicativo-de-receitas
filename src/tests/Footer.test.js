import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('O componente footer deve: ', () => {
  it('ser encontrado na rota /foods, logo após o login do usuário, contendo dois botões', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
    const button = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, 'exemplo@hotmail.com');
    userEvent.type(passwordInput, '12345678');
    userEvent.click(button);
    
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    
    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    const foodsButton = screen.getByTestId('food-bottom-btn');
    expect(drinksButton).toBeInTheDocument();
    expect(foodsButton).toBeInTheDocument();
  })
})