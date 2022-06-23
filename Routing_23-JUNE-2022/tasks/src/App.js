// import logo from './logo.svg';
// import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Counter from "./component/Counter";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [checked,setChecked] = useState(false);
  const changechecked= ()=>{
    setChecked(!checked);
  };
  return (
    <BrowserRouter>
      
        <Header onChecked={changechecked} checked = {checked}/>
        <Routes>
          
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
      
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
