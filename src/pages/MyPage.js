import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import profile from "../assets/dobi.png";

const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
`;

const Container = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 200px;

    background-color: #F2F2F2;
    display: flex;

`;

const ImageContainer = styled.div`
    margin-top: auto;
    margin-left: 50px;
`;

const TextContainer = styled.div`
    margin-top: 50px;
    margin-left: 100px;
`;

const Profile = styled.img`
    background-color: white;
    width: 160px;
    height: 180px;
    border-radius: 50%;
`;

const Text = styled.text`
    font-weight: bold;
`;

function MyPage(){
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <Container>
                <ImageContainer>
                    <Profile src={profile}/>
                </ImageContainer>
                <TextContainer>
                    <Text>닉네임: </Text> 도비
                    <br/><br/>
                    <Text>자기소개: </Text> 안녕하세요 도비입니다.
                </TextContainer>
            </Container>
        </Wrapper>
    )
}

export default MyPage;