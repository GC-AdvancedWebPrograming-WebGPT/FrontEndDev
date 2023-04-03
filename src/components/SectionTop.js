import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 90%;
    height: 200px;
    background-color: #F7F7F7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`;

const Text = styled.text`
    position: absolute;
    padding-top: 25px;
    padding-left: 50px;
    font-weight: bold;
`;

const SectionTop = () =>{
    return(
        <Wrapper>
            <Text>이 주의 영양제 Pick!</Text>
        </Wrapper>
    );
}

export default SectionTop;