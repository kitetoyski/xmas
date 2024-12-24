import React from 'react';
import './App.css';
 import ButtonAppBar from './pages/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountdownToChristmas from './pages/mainpage';

function App() {
  return (
    <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<CountdownToChristmas />} />
        

        </Routes>
      </Router>
  );
}

export default App;
