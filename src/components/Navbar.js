import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import netflix from '../images/netflix.png';
import { auth } from '../firebase/setup';

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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

  const siningClick = () => {
    navigate('/signin');
  };

  const logoutClick = async () => {
    try {
      await signOut(auth);
      toast.success('Loggout successfylly', {
        theme: 'dark',
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[8]?.poster_path})`,
       backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        height: '600px',
        width: '100%',
      }}
    >
      <ToastContainer autoClose={1000} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <img
          style={{ width: '80px', height: '80px' }}
          src={netflix}
          alt="Netflix"
        />
        <div>
          {auth.currentUser?.emailVerified ? (
            <Button
              onClick={logoutClick}
              color="error"
              variant="contained"
              sx={{ height: '50px', marginLeft: '10px' }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={siningClick}
              color="error"
              variant="contained"
              sx={{ height: '50px' }}
            >
              SIGNIN
            </Button>
          )}
        </div>
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <h1
          style={{ color: 'red', fontSize: '70px', fontFamily: 'initial' }}
        >
          {movies[4]?.original_title}
        </h1>
        <h3 style={{ color: 'white', textAlign: 'left', width: '500px' }}>
          {movies[4]?.overview}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
