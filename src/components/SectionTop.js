import React from "react";
import styled from "styled-components";
import week1 from "../assets/week1.png";
import week2 from "../assets/week2.png";
import week3 from "../assets/week3.png";
import week4 from "../assets/week4.png";
import week5 from "../assets/week5.png";
import Ranking from "./Ranking";

const Wrapper = styled.div`
    width: 90%;
    height: 400px;
    background-color: #F7F7F7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`;

const Container = styled.div`
    display: flex;
    padding-top: 70px;
`;

const Title = styled.span`
    position: absolute;
    padding-top: 25px;
    padding-left: 50px;
    font-size: 20px;
    font-weight: bold;
`;

const Text = styled.div`
    text-align: center;
        
`;
const WeekList = styled.div`
    margin: auto;
    font-weight: bold;
    text-align: center;
`;

const Pill = styled.img`
    background-color: white;
    width: 150px;
    height: 180px;
`;

const SectionTop = () =>{
    return(
        <Wrapper>
            <Title>이 주의 영양제 Pick!</Title>
            <Container>
                {/* <WeekList>
                    <Pill src={week1}/>
                    <Text>멀티비타민 오쏘뮬 이뮨</Text>
                </WeekList>
                <WeekList>
                    <Pill src={week2}/>
                    <Text>락토핏 골드</Text>
                </WeekList>
                <WeekList>
                    <Pill src={week3}/>
                    <Text>뉴트리코어 밀크씨슬</Text>
                </WeekList>
                <WeekList>
                    <Pill src={week4}/>
                    <Text>루테인 지아잔틴</Text>
                </WeekList>
                <WeekList>
                    <Pill src={week5}/>
                    <Text>종근당 칼슘 앤 마그네슘</Text>
                </WeekList>
                */}
                <Ranking toLink="/condition" Ranking={1} imgSrc={week1} itemName="멀티비타민 오쏘뮬 이뮨" />
                <Ranking toLink="/condition" Ranking={2} imgSrc={week2} itemName="락토핏 골드" />
                <Ranking toLink="/condition" Ranking={3} imgSrc={week3} itemName="뉴트리코어 밀크씨슬" />
                <Ranking toLink="/condition" Ranking={4} imgSrc={week4} itemName="루테인 지아잔틴" />
                <Ranking toLink="/condition" Ranking={5} imgSrc={week5} itemName="종근당 칼슘 앤 마그네슘" />
            </Container>
        </Wrapper>
    );
}

export default SectionTop;