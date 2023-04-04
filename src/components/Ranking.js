import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const RankingBox = styled.div`
    position: relative;
    z-index: 1;
    background: #4F7FDB;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const RankingText = styled.text`
    color: white;
    font-size: 30px;
    font-family: Impact;
`;

const ButtonBox = styled.div`
    position: relative;
    z-index: 0;
    margin-left: 24px;
    margin-top: -53px;
    background: white;
    width: 200px;
    height: 240px;
`;

const Img = styled.img`
    width: 140px;
    height: 140px;
    margin-top: 60px;
    margin-left: 30px;
`;

const Nametext = styled.text`
    display: flex;
    text-align: center;
    justify-content: space-around;
`;

const Box = styled.div`
    width: 300px;
    height: 300px;
    margin-top: 12px;
    margin-left: 140px;
`;

function Ranking ({toLink, Ranking, imgSrc, itemName}) {
    //non selected bgColor = "#A7D9FF";
    //selected bgColor = "#4F7FDB";

    return (
        <Box>
            <RankingBox>
                <RankingText> {Ranking} </RankingText>
            </RankingBox>
            <Link to={toLink}>
                <ButtonBox>
                    <Img src={imgSrc} alt="Ranking" />
                    <Nametext> {itemName} </Nametext>
                </ButtonBox>
            </Link>
        </Box>
    );
}

export default Ranking;