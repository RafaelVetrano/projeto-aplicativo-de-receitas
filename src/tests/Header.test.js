import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('O componente Header', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
    userEvent.type(screen.getByTestId('email-input'), 'exemplo@hotmail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');
    userEvent.click(screen.getByTestId('login-submit-btn'));
  });

  it('deve mostrar um elemento <h1> com o nome da página correspondente', () => {
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  })

  it('deve ter dois botões: Profile e Search', () => {
    const profile = screen.getByTestId('profile-top-btn');
    const search = screen.getByTestId('search-top-btn');

    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  })

  it('deve exibir a barra de pesquisa ao clicar no botão Search', () => {
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    
    const searchBar = screen.getByTestId('search-input');
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBtn);
    expect(searchBar).not.toBeInTheDocument();
  })
})