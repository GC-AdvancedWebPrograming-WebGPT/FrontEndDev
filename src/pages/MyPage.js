import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import profile from "../assets/dobi.png";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Container  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 70px;
    gap: 120px;

    width: 100%;
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 275px;

`;

const InfoMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 55px;
    gap: 300px;

    width: 100%;
    height: 260px;

    background: #E7F5FF;
    border-radius: 20px;



`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;

    width: 100%;
    height: 100%;

`;

const ProfileImage = styled.img`
    box-sizing: border-box;

    width: 170px;
    height: 170px;

    background: #FFFFFF;
    border: 1px solid #000000;

`;

const ProfileText = styled.div`
    width: 342px;
    height: 40px;

    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;

    color: #000000;

`;

    const MyNutrientsContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 80px;

    border-left: 2px solid #4F7FDB;

`;


const NutrientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    width: 100%;


`;

const BoldText = styled.text`
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    display: flex;
    align-items: center;
    text-align: center;
`;

const accessToken = localStorage.accessToken


function MyPage(){

    const [user, setUSer] = useState("로그인을 해주세요");
    const [image, setImage] = useState("");
    const [myList, setMyList] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/user-service/api/users/me',
        { headers: { "Authorization" : `Bearer ${accessToken}`}}
        ).then((res) => {
            console.log(res);
            setUSer(res.data.nickname)
            setImage(res.data.profileImageUrl)
            setMyList(res.data.userNutrients)
        })
    })

    return(
        <Wrapper>
            <Header/>
            <Navigator/>
           <Container>
	        <InfoContainer>
                <InfoMainContainer>
                    <ProfileContainer>
                        <ProfileImage src={image}/>
                        <ProfileText>
                            {user}
                        </ProfileText>
                    </ProfileContainer>
                    <MyNutrientsContainer>
                        My 영양제<br/><br/>
                        <BoldText>0</BoldText> 개
                    </MyNutrientsContainer>
                </InfoMainContainer>

            </InfoContainer>
            <NutrientsContainer>
                {myList.map((it) => (
                        <div key={it.nutrientId}>
                            <div>{it.title}</div>
                            <img src={it.imageUrl} alt={it.title} />
                        </div>
                    ))}
            </NutrientsContainer>
	 </Container>
        </Wrapper>
    )
}

export default MyPage;