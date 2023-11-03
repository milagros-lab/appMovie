import {
  Box, Card, CardContent, CardMedia, Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovie = () => {
    try {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=4a5ee9e17830a25573db11f304ede548')
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);

  return (
    <div style={{ backgroundColor: '#000000ed' }}>
      <Grid container spacing={2} style={{ paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px' }}>
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.id}>
            <Box>
              <Card>
                <CardContent style={{ padding: '0px' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
