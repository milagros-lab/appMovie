import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import netflix from '../images/netflix.png';

function Navbar() {
  const [movies, setMovies] = useState([]);

  const getMovie = () => {
    try {
      fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=4a5ee9e17830a25573db11f304ede548',
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies[0]);
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[4]?.poster_path})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '450px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <img style={{ width: '80px', height: '80px' }} src={netflix} alt="logo netflix" />
        <Button color="error" variant="contained" sx={{ height: '50px' }}>SingIn</Button>
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <h1 style={{ color: '#F1F1F1', fontSize: '70px', fontFamily: 'initial' }}>{movies[4]?.original_title}</h1>
        <h3 style={{ color: '#F1F1F1', textAlign: 'left', width: '500px' }}>{movies[4]?.overview}</h3>
      </div>
      <Button variant="contained" style={{ marginLeft: '20px' }} sx={{ color: 'black', bgcolor: 'white', fontWeight: 'bold' }}>View Trailer</Button>
    </div>
  );
}

export default Navbar;
