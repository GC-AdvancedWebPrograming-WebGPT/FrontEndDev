import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position : relative;
    transform : translateY(0%);   
    
    width: 90%;
    height: 100px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 300px;
    
    background-color: #F7F7F7;
    display: flex;
    
`;

const LeftContainer = styled.div`
    margin-top: 25px;
    margin-right: auto;
`;

const RightContainer = styled.div`
    margin-top: 25px;
    margin-right: 25px;
`;

const Text = styled.text`
    padding-top: 25px;
    padding-left: 50px;
    font-weight: bold;
`;

const Footer = () => {
    return(
        <Wrapper>
            <LeftContainer>
                <Text>
                    ©2023 Web GPT. All rights reserved
                </Text>
            </LeftContainer>
            <RightContainer>
                <Text>
                    Privacy & Policy
                </Text>
            </RightContainer>
            <RightContainer>
                <Text>
                    Terms & Condition
                </Text>
            </RightContainer>
        </Wrapper>
    );
}

export default Footer;