import React ,{ useEffect }from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Redirection = () => {
  
  console.log(process.env.REACT_APP_URL);

  const navigate = useNavigate();

      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);

       useEffect( ()=>{
        axios.get(`http://localhost:8000/authentication/api/auth/login?code=${code}`, {
    withCredentials: true
  })
  .then((response) => {
    console.log(JSON.stringify(response));
    localStorage.setItem('accessToken', response.data.accessToken);
    navigate("/");
  });
            
       },[]);

    return <div>로그인 중입니다.</div>;
  };
  
  export default Redirection;