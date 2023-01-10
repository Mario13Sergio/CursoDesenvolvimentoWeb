import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Footer } from './componentes/Footer'
import { Header } from './componentes/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <main>
        <AppRoutes/>
      </main>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
