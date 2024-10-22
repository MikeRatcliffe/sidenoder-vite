import '/src/assets/App.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/slate/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
