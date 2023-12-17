import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(195 16 16)', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Acerca de nosotros
            </Typography>
            <Typography variant="body2">
              Somos una plataforma de transmisión de video que ofrece una amplia variedad de contenidos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Navegación
            </Typography>
            <Typography variant="body2">
              <a href="#">Inicio</a>
              <br />
              <a href="#">Series</a>
              <br />
              <a href="#">Películas</a>
              <br />
              <a href="#">Mi Lista</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Ayuda
            </Typography>
            <Typography variant="body2">
              <a href="#">Preguntas frecuentes</a>
              <br />
              <a href="#">Cómo ver</a>
              <br />
              <a href="#">Centro de ayuda</a>
              <br />
              <a href="#">Términos de uso</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Redes Sociales
            </Typography>
            <Typography variant="body2">
              <a href="#">Facebook</a>
              <br />
              <a href="#">Twitter</a>
              <br />
              <a href="#">Instagram</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;