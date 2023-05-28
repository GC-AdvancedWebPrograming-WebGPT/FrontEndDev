import React ,{ useEffect }from "react";

const Redirection = () => {
  
  console.log(process.env.REACT_APP_URL);

      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);

       useEffect(()=>{
        fetch(`http://localhost:8000/authentication/api/auth/login?code=${code}`,{
          method: 'GET',
          credentials: 'include'
        }).then(data => {
          console.log(JSON.stringify(data));
          localStorage.setItem('token', data.accessToken);
          
          })  
       },[]);

    return <div>로그인 중입니다.</div>;
  };
  
  export default Redirection;