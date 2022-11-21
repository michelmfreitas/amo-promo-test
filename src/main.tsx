import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/home'

import './assets/sass/app.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
