import React from "react";
import styled from "styled-components";
import mark from "../assets/mark.png";
import article from "../assets/article.png"

const Wrapper = styled.div`
    width: 90%;
    height: 600px;
    background-color: #F7F7F7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 400px;

`;

const Title = styled.text`
    position: absolute;
    padding-top: 50px;
    padding-left: 25px;
    font-size: 24px;
    font-weight: bold;
    
`;
const Text = styled.text`
    position: absolute;
    padding-top: 100px;
    padding-left: 25px;
`;

const Upper = styled.span`
    position: absolute;
    padding-top: 25px;
    padding-left: 25px;

`;

const Article = styled.img`
    width: 50%;
    height: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
`;


const SectionBottom = () =>{
    return(
        <Wrapper>
            <Upper>
            <img src={mark} alt=""/>
            &nbsp;&nbsp; 오늘의 건강 뉴스
            </Upper>
            <br/>
            <Title>
                거북목은 인류의 진화인가?
            </Title>
            <Text>
                친구의 결혼을 앞두고 우정 사진을 찍은 날, 앞으로 한껏 늘어난 목을 보며 나는 스스로 '진화된 인류'라 표현했다.
                우리는 정말 진화중인 것일까...
            </Text>
            <Article src={article}/>
        </Wrapper>
    )
}

export default SectionBottom;