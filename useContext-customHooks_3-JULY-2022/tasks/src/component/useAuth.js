import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

 const useAuth = (email, password)=>{
   //  const location = useNavigate();
     const userEmail= "yousef@gmail.com";
     const userPassword= "Yousef@123";
// const [userEmail , setEmail] = useState("yousef@gmail.com");
// const [userPassword , setPassword] = useState("Yousef@123");
const [message , setMessage] = useState("");
const [flag , setflag] = useState(false);

const HandlClick = (e) =>{
   e.preventDefault();
    if(userEmail === email && userPassword === password)
   {
      setflag(true)
      setMessage('successful');
   }else{
      setMessage('fail') ;
   }
   // location(`/${message}`)
}

return [message,HandlClick,flag];
   
}
export default useAuth ;