import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { firebaseConfig } from "../firebase/setup";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    padding: "20px",
    outline: "none",
    maxWidth: "90%", 
    maxHeight: "90vh", 
  },
};

const ModalTrailer = ({ location }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = async () => {    
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${location.state.movie.id}/videos?api_key={firebaseConfig.apikey}&language=en-US`
      );
      const data = await response.json();

          if (data.results.length > 0) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      } else {
        console.log("No se encontró un tráiler para esta película.");
      }
    } catch (error) {
      console.error("Error al obtener el tráiler:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const opts = {
    height: (windowDimensions.height * 0.7).toString(), 
    width: (windowDimensions.width * 0.7).toString(), 
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ marginBottom: "30px"}}>
      <Button
        variant="contained"
        sx={{ color: "white", bgcolor: "red"}}
        onClick={openModal}
         
      >
        See trailer
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Tráiler Modal"
        style={customStyles}
      >
        {trailerKey && <YouTube videoId={trailerKey} opts={opts} />}

        <Button
          variant="contained"
          sx={{ color: "black", bgcolor: "white" }}
          onClick={closeModal}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default ModalTrailer;
