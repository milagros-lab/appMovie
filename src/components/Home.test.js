import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Home from './Home';

jest.mock('./Home'); // Mockea tus servicios

const mockMovies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
  // ... más películas
];

describe('Home Component', () => {
  beforeAll(() => {
    // Configura el comportamiento del servicio mock
    Home.mockResolvedValue(mockMovies);
    Home.mockResolvedValue([]); // Puedes ajustar según sea necesario
  });

  it('renders a list of movies from TMDB', async () => {
    render(<Home />);
    
    // Espera a que las películas se carguen
    await waitFor(() => {
      // Aserciones sobre la existencia de elementos en la pantalla
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
      // ... más aserciones según tus necesidades
    });
  });

  // Puedes agregar más pruebas según tus requerimientos
});
