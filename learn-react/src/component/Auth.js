import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

 const Auth = (email, password)=>{
   //  const location = useNavigate();
     const userEmail= "yousef@gmail.com";
     const userPassword= "Yousef@123";
// const [userEmail , setEmail] = useState("yousef@gmail.com");
// const [userPassword , setPassword] = useState("Yousef@123");
const [message , setMessage] = useState("");

const HandlClick = (e) =>{
   e.preventDefault();
    if(userEmail === email && userPassword === password)
   {
      setMessage('successful');
   }else{
      setMessage('fail') ;
   }
   // location(`/${message}`)
}

return [message,HandlClick];
   
}
export default Auth ;