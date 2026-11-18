import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/app.jsx'
import Categories from './page/categories.jsx'
import NotFound from './page/notfound.jsx'
import PrivacypolicyPage from './page/privacypolicypage.jsx'
import About from './page/about.jsx'
import Leaderboard from './page/leaderboard.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/categories' element={<Categories /> } />
        <Route path='/privacypolicy' element={<PrivacypolicyPage /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/leaderboard' element={<Leaderboard /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </Router>
  </StrictMode>,
)
