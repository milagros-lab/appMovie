import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { auth, database } from '../firebase/setup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const reviewContainerStyle = {
  maxHeight: '500px', // Ajusta según tus necesidades
  overflowY: 'auto', // Añade barra de desplazamiento si es necesario
};

export const MovieReview = ({ getMovieCallback }) => {
  const location = useLocation();

  const [review, setReview] = useState('');
  const [reviewData, setReviewData] = useState([]);

  const moviewRef = doc(database, 'Movies', `${location.state.movie.id}`);
  const reviewRef = collection(moviewRef, 'Reviews');
  console.log('console del auth', auth);

  const showReview = async () => {
    try {
      const data = await getDocs(reviewRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setReviewData(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(reviewRef, {
        movieReview: review || null,
        email: auth.currentUser?.email || null,
        username: auth.currentUser?.displayName || null,
        profile_image: auth.currentUser?.photoURL || null,
      });
      toast.success('Review added sucesfully', {
        theme: 'dark',
      });
      setReview('');
      showReview();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showReview();
  }, []);

  return (
    <Grid item xs={12} sm={12} md={4}>
      <div
        style={{
          backgroundColor: '#0e0e10',
          height: '100vh',
          paddingLeft: '10px',
          /*   maxHeight: '500px', // Ajusta según tus necesidades */
          overflowY: 'auto', // Añade barra de desplazamiento si es necesario
        }}
      >
        <Grid container>
          <form onSubmit={handleSubmit}>
            <h5 style={{ color: 'white', fontWeight: 'bold' }}>Add Review</h5>
            <TextField
              onChange={(e) => setReview(e.target.value)}
              size="small"
              label="add review"
              variant="standard"
              style={{ backgroundColor: 'white', borderRadius: '5px' }}
              value={review}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ margin: '10px', bgcolor: 'red', color: 'white' }}
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid container>
          <div>
            {reviewData.map((each) => {
              return (
                <>
                  <div style={{ display: 'flex' }}>
                    <img
                      alt="foto user"
                      style={{ width: '50px', borderRadius: '50px' }}
                      src={each.profile_image}
                    />
                    <li style={{ color: 'white', paddingLeft: '10px' }}>
                      {each.username}
                    </li>
                  </div>
                  <h6 style={{ color: 'white' }}>{each.movieReview}</h6>
                </>
              );
            })}
          </div>
        </Grid>
      </div>
    </Grid>
  );
};
