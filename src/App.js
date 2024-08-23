// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import Footer from './components/Footer';

function App() {
  console.log(routes,"routes")
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
