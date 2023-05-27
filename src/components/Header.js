import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 200px;
`;

const Logo = styled.img`
    position: absolute;
    left: 6%;
`;

const style = {
    backgroundColor : '#4F7FDB',
    borderRadius: '10px',
    height: '34px',
    width: '100px',
    textAlign: 'center',
    float: 'right',
    alignItems: 'center',
    marginTop: '4%',
    marginRight: '6%',
    justifyContent: 'center',
    lineHeight: '35px'
  }

const Login = styled.text`
    color: white;
    top: 10%;
`;

const login = {
    color: '#FFFFFF',
    weight: 'center',
    left: '50%'
}

const Text = styled.text`
    position: absolute;
    left: 50%;
    top: 14%;
    color: black;
    transform: translate(-50%, -50%);
    font-size: 64px;
    font-weight: bold;
`;
const Header = () => {
    return(
        <Wrapper>
            <Logo src={logo}/>
            <Link to ="/"><Text>Re:Nu</Text></Link>
            <Link to = "/login"><div style={style}><Login>로그인</Login></div></Link>
        </Wrapper>
    );
}

export default Header;