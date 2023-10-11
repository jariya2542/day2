import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // ตรวจสอบการนำเข้านี้

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// เรียกใช้งาน reportWebVitals โดยไม่ต้องลบออก
reportWebVitals();