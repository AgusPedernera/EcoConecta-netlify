import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routers/Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  
  <Rutas />

  </BrowserRouter>
  </React.StrictMode>,
)
