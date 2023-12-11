import { Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ModalTrailer from './ModalTrailer';

export const MovieTrailer = () => {
  const location = useLocation();

  return (
    <Grid item xs={12} sm={12} md={8}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`,
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ToastContainer autoClose={1000} />
        <div
          style={{
            paddingTop: '250px',
            paddingLeft: '30px',
            paddingRight: '10px',
            fontFamily: 'initial',
          }}
        >
          <Grid container>
            <h1 style={{ color: 'red' }}>
              {location.state.movie?.original_title}
            </h1>
          </Grid>
          <div style={{ display: 'flex' }}>
            <h4 style={{ color: 'white', fontWeight: '100' }}>
              Language:
              {location.state.movie?.original_language} -
            </h4>
            <h4
              style={{
                color: 'white',
                fontWeight: '100',
                ml: '10px',
              }}
            >
              Release date:
              {location.state.movie?.release_date}
            </h4>
          </div>
          <h4
            style={{
              color: 'white',
              fontWeight: '100',
              ml: '10px',
            }}
          >
            Average:
            {location.state.movie?.vote_average}
          </h4>
          <Grid>
            <h3 style={{ color: 'white', fontWeight: '100' }}>
              {location.state.movie?.overview}
            </h3>
            <ModalTrailer location={location} />
          </Grid>
        </div>
      </div>
    </Grid>
  );
};
