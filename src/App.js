import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Signin from './components/Signin';
import DetailMovie from './components/DetailMovie';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/detailMovie" element={<DetailMovie />} />
      </Routes>
    </div>
  );
}

export default App;
