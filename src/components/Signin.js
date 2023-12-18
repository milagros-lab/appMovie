import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Box, Button } from "@mui/material";
import netflix from "../images/netflix.png"
import { auth, googleAuth } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const navigate = useNavigate();

  const googleSigning = async () => {
    try { 
      await signInWithPopup(auth, googleAuth);
      setTimeout(()=>{
        auth.currentUser?.emailVerified && navigate("/");        
      }, 1000)
      toast.success("SignedIn success")
    } catch (error) {
      console.error(error);
    }   
  };
   
  return (
    <Box  container="true" style={{ backgroundColor: "#100f0fed", height: "100vh"}}>
     <ToastContainer autoClose={1000}/>
      <img  style={{ width: '80px', height: '80px' }} src={netflix} alt="logo netflix"/>
      <div style={{ position: "fixed", left: "45%", top: "45%" }}>
        <Button onClick={googleSigning} variant="contained" color="error">
          Signin
        </Button>
        <div>
          <h2 style={{ color: "white" }}> Start to explore here</h2>
        </div>
      </div>
    </Box>
  );
}

export default Signin;
