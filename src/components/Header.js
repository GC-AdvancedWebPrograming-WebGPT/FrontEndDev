import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Wrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 200px;
`;

const Logo = styled.img`
    position: absolute;
    left: 5%;
`;

const Text = styled.text`
    position: absolute;
    left: 50%;
    top: 14%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    font-weight: bold;
`;
const Header = () => {
    return(
        <Wrapper>
            <Logo src={logo}/>
            <Text>Web GPT</Text>
        </Wrapper>
    );
}

export default Header;