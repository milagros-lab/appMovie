import React from 'react';
import { MovieTrailer } from './MovieTrailer';
import { Grid } from '@mui/material';
import { MovieReview } from './MovieReview';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row', // O 'column', según la disposición que prefieras
  justifyContent: 'space-between',
  overflowY: 'auto', // Añade barra de desplazamiento si es necesario
};

const DetailMovie = () => {
  return (
    <Grid container style={containerStyle}>
      <MovieTrailer />
      <MovieReview />
    </Grid>
  );
};

export default DetailMovie;
