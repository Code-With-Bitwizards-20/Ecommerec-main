import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Supplements from './pages/Supplements';
import Knifes from './pages/Knifes';
import Others from './pages/Others';
import Cart from './pages/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/knifes" element={<Knifes />} />
            <Route path="/others" element={<Others />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;