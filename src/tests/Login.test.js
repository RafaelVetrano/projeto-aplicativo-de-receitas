import React, { useReducer } from 'react';
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

  it('deve ter o mesmo valor do input do que foi digitado pelo usuário', () => {
    renderWithRouter(<App />);
    
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    userEvent.type(emailInput, 'teste');
    expect(emailInput.value).toBe('teste');

    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
    userEvent.type(passwordInput, '1234');
    expect(passwordInput.value).toBe('1234');
  })

  it('deve desabilitar o botão se', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('exemplo@exemplo.com')
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'exemplo@email.com')
    userEvent.type(passwordInput, '123456')
    expect(button).toBeEnabled();
    userEvent.clear(passwordInput);
    expect(button).toBeDisabled();
  })
})
