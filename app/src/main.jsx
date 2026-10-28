import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Beranda from './pages/Beranda.jsx'

// Router sengaja diletakkan di sini, bukan di App.jsx, agar uji otomatis
// dosen bisa merender <App /> di dalam MemoryRouter.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Beranda />
    </BrowserRouter>
  </StrictMode>,
)
