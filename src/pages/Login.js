import kakao from "../assets/kakao.png"

const Login = ()=>
{
    const Rest_api_key='3a8532afa3fd67df7b3740b6a93542b3' //REST API KEY
    const redirect_uri = 'http://localhost:8081/api/auth/login' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    // 인가코드? 머시기 가져오는건데 왜 로그값 안뜨지
    const code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <img src={kakao} onClick={handleLogin}/>
    {/* <button onClick={handleLogin}>카카오 로그인</button> */}
    </>
    )
}
export default Login
