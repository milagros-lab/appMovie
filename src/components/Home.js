import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
// eslint-disable-next-line object-curly-newline
import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { database } from '../firebase/setup';

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovie = useCallback(async() => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=4a5ee9e17830a25573db11f304ede548',
      );
      if(!response.ok) {
        throw new Error("error fetching movies");
      }
      const json = await response.json();
      setMovies(json.results);
      return json.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

 

  const addMovie = async (movie) => {
    if (!movie || !movie.id) {
      console.error("Movie object or id is undefined");
      return;
    }
    const movieRef = doc(database, 'Movies', `${movie.id}`);
    try {
      await setDoc(movieRef, {
        movieName: movie.original_title,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovie();
      if (movieData && movieData.length > 0) {
        addMovie(movieData[0]); // You can choose the first movie or handle the array appropriately
      }
    };
  
    fetchData();
  }, [getMovie]);

  return (
    <div style={{ backgroundColor: '#100f0fed' }}>
      <Grid container 
        spacing={2}    
        style={{
          paddingTop: '20px',
          paddingRight: '20px',
          paddingLeft: '20px',
          marginTop: 'auto',
          paddingBottom: '10px',
          justifyContent: "center",
        }}
      >
        ,
        {movies.map((movie) => {
          return (
            <Grid item xs={12} sm={6} md={3} 
            key={movie.id}>
              <Box>
                <Link to="/detailMovie" state={{ movie: movie }}>
                  <Card >
                    <CardContent style={{ padding: '0px'}} >
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
