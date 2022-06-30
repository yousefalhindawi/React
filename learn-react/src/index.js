import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Api from './component/Api';
import reportWebVitals from './reportWebVitals';

// const TestElement =  ()=><h1>Sala</h1>;

// const TestElement2 =  ()=> {
//   return (
    
//   <div>
//     <ul>
//       <li>ali</li>
//       <li>sami</li>
//       <li>alaa</li>
//     </ul>

// </div>
// )
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.querySelector('#yousef')).render(
//   <React.Fragment>
// <TestElement />
// <TestElement2 />
// </React.Fragment>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
