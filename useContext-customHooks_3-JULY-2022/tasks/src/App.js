import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";
import UserDetails from "./component/testDetails";
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { testContext } from "./component/UserContext";
class App extends React.Component {
  state = {
    user3: 'Alaa',
    user : { name: 'yousef', age: 29 },
    user2 : { major: 'EEE', gender: 'male' },
    counter: 0
  }
  


  updateUserData = () => {
    // console.log('Hi');
   this.setState({counter: this.state.counter + 1});
   
}


render() {

  return (
    <BrowserRouter>
     <testContext.Provider value={{ state: this.state,   updateUserData: this.updateUserData  }}>
        {/* <UserContext2.Provider value={user2}> */}
    <div>
    <Nav />
    <UserDetails />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login  />} />
    </Routes>
    </div>
    {/* </UserContext2.Provider> */}
        
       
    </testContext.Provider>
    </BrowserRouter>
  );
}
}

export default App;
