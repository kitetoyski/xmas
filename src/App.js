import React from 'react';
import './App.css';
 import ButtonAppBar from './pages/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountdownToChristmas from './pages/mainpage';
import Home from './pages/mainpage';
import NewYear from './pages/newyear';

function App() {
  return (
    <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/christmas" element={<CountdownToChristmas />} />
          <Route path="/newyear" element={<NewYear />} />


        </Routes>
      </Router>
  );
}

export default App;
