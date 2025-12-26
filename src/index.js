import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LinkTree } from './pages/linktree.tsx';
import { Portfolio } from './pages/portfolio.tsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LinkTree/>}/>
        <Route path="portfolio" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
