import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Video from './pages/cadastro/Video'
import Categoria from './pages/cadastro/Categoria'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Page404 = () => {
  return(
    <div>
      Página 404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/cadastro/video' element={<Video/>} />
      <Route path='/cadastro/categoria' element={<Categoria/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


