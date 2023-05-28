import React, { useEffect, useState } from 'react';


import kakao from "../assets/kakao.png"
import data from '../data';
// 카카오 로그인 요청 페이지 띄우기..?
const Login = () => {

    
    const Rest_api_key=`fdd05f39c2f7d125cbc44a59911390b7`//REST API KEY
    const redirect_uri = `http://localhost:3000/auth/kakao` //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    // 인가코드? 머시기 가져오는건데 왜 로그값 안뜨지
    const handleLogin = () => {

        window.location.href = kakaoURL;
    
      }


    return(
    <>
    <div>

    </div>
    {/* <button onClick={handleLogin} style={{background:'#FEE500', borderRadius:'12px', width:'12%', padding:'10px', borderColor:'#FEE500'}}>카카오 로그인</button> */}
    {/* <Link to="/kakao"><img src={kakao} onClick={handleLogin}/></Link> */}
    <img src={kakao} onClick={handleLogin}/>
    </>
    )
}
export default Login
