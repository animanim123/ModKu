import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/app.jsx'
import Latest from './page/latest.jsx'
import Categories from './page/categories.jsx'
import NotFound from './page/notfound.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/latest' element={<Latest /> } />
        <Route path='/categories' element={<Categories /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </Router>
  </StrictMode>,
)
