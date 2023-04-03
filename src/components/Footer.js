import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position : relative;
    transform : translateY(-100%);   
    
    width: 90%;
    height: 100px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 300px;
    margin-bottom: auto;
    
    background-color: #F7F7F7;
    
`;

const Text = styled.text`
    position: absolute;
    padding-top: 25px;
    padding-left: 50px;
    font-weight: bold;
`;

const Footer = () => {
    return(
        <Wrapper>
            <Text>
                ©2023 Web GPT. All rights reserved
            </Text>
        </Wrapper>
    );
}

export default Footer;