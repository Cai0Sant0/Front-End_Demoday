import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './routes'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <>
    <Routes />
  </>
);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Routes/>
//   </StrictMode>,
// )
