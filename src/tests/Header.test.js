import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import Foods from '../components/Foods';
import userEvent from '@testing-library/user-event';

describe('O componente Header', () => {
  it('deve mostrar um elemento <h1> com o nome da página correspondente', () => {
    renderWithRouter(<Foods />);
    // const title = screen.getByRole('heading', { name: /foods/i, level: 1 })
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  })

  it('deve ter dois botões: Profile e Search', () => {
    renderWithRouter(<Foods />);
    const buttons = screen.getAllByRole('button');
    const profile = screen.getByTestId('profile-top-btn');
    const search = screen.getByTestId('search-top-btn');

    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  })

  it('deve redirecionar à página de perfil ao clicar no botão Profile', () => {
    const { history } = renderWithRouter(<Foods />);

    userEvent.click(screen.getByTestId('profile-top-btn'));
    expect(history.location.pathname).toBe('/profile')
  })

  it('deve exibir a barra de pesquisa ao clicar no botão Search', () => {
    renderWithRouter(<Foods />);
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    
    const searchBar = screen.getByTestId('search-input');
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBtn);
    expect(searchBar).not.toBeInTheDocument();
  })
})