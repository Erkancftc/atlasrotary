import React from 'react';
import ReactDOM from 'react-dom/client';
import "./stylesheets/bootstrap.min.css"
import "./stylesheets/bootstrap.rtl.min.css"
import "./stylesheets/bootstrap-grid.min.css"
import "./stylesheets/bootstrap-reboot.min.css"
import "./stylesheets/bootstrap-utilities.rtl.min.css"
import "./stylesheets/bootstrap-utilities.min.css"
import "./stylesheets/bootstrap-reboot.rtl.min.css"
import "./stylesheets/bootstrap-grid.rtl.min.css"
import "./stylesheets/style.css"
import "./stylesheets/responsive.css"
import "./stylesheets/colors/color1.css"
import "./stylesheets/owl.carousel.css"
import "./stylesheets/animate.css"
import "./stylesheets/animate.min.css"
import "./stylesheets/swiper-bundle.min.css"
import "./stylesheets/magnific-popup.min.css"
import "./stylesheets/map.min.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
