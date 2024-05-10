import React from 'react'
import {Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx'
import Layout from './components/Layout.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Recipes from './components/Recipes.jsx';
import Create from './components/Create.jsx';

const App = () => {
  return (
    <div className='w-[80%] m-auto'>
      <Nav />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create-recipe" element={<Create />} />
      </Routes>


    </div>

  )
}

export default App

