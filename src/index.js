import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Nosotros from './components/subpaginas/Nosotros';
import Servicios from './components/subpaginas/Servicios';
import Contactos from './components/subpaginas/Contactos';
import FAQ from './components/subpaginas/FAQ';



import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<App/>} />
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/faq' element={<FAQ/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
