import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('A página Login', () => {
  it('deve ter dois inputs: Email e Senha', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })
  
  it('deve habilitar o botão Entrar ao receber email e senha válidos', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
    const button = screen.getByTestId('login-submit-btn');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    userEvent.type(emailInput, 'exemplo@hotmail.com');
    userEvent.type(passwordInput, '12345678');
    expect(button).toBeEnabled();    
  })

  it('deve ser redirecionada à página Foods', () => {
    const { history } = renderWithRouter(<App />, {}, '/foods')
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
    const button = screen.getByTestId('login-submit-btn');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    userEvent.type(emailInput, 'exemplo@hotmail.com');
    userEvent.type(passwordInput, '12345678');
    expect(button).toBeEnabled();    
    userEvent.click(button);
    expect(history.location.pathname).toBe('/foods');
  })
})
