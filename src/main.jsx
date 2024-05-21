import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
