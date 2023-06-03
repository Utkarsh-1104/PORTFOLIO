import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bgimg from './assests/sitebg.png'
import Nav from './components/Nav';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Work  from './components/Work';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${Bgimg})`}} className="bg-cover bg-no-repeat overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();