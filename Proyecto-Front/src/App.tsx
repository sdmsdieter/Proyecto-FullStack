import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home_pag_principal'
// import NuevaPagina from './pages/Nueva_pagina'
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
// OJO
// Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to help you style your HTML elements quickly and efficiently. 
// It allows you to apply styles directly in your HTML using class names, which can lead to faster development and more maintainable code.
// Pedir siempre documentacion a la ia
export default App