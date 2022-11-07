import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../Pages/Home';
import Move from '../../Pages/Moves';

import Sections from '../../Pages/Sections';
import CartItem from '../../Pages/CartItem';

const Swich = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sections" element={<Sections />} />

      <Route path="/move" element={<Move />} />
      <Route path="/cartitem" element={<CartItem />} />
    </Routes>
  );
};

export default Swich;
