import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LinkTree } from './pages/linktree.tsx';
import { Portfolio } from './pages/portfolio.tsx';
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LinkTree/>}/>
        <Route path="portfolio" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
