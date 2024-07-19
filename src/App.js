import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

const App = () => {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery tours={tours} removeTour={removeTour} setTours={setTours} />} />
      </Routes>
    </Router>
  );
};

export default App;
