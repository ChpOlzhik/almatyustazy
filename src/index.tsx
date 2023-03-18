import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import i18n from './models/18n/18n'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
)
