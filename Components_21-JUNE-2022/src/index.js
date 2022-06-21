import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Card from './component/Card';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
  
);
const cards = ReactDOM.createRoot(document.getElementById('cards'));
cards.render(
  <div className="container my-5">
  <div className="row d-flex justify-content-between">
    <Card image = 'https://picsum.photos/203' title = 'HTML' description = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'/>
 <Card image = 'https://picsum.photos/204' title = 'CSS' description = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'/>
 <Card image = 'https://picsum.photos/205' title = 'JS' description = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'/>
 <Card image = 'https://picsum.photos/206' title = 'React' description = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'/>
  </div>
  </div>
);