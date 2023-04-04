import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Box = styled.div`
    position: relative;
    width: 267px;
    height: 416px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
`

const Img = styled.img`
    margin: auto;
    display: block;
    left: 0%;
    right: 0%;
    top: 5%;
    bottom: 5%;
`
const BackImg = styled.div`
    align-items:center; 
    display: flex; 
    justify-content:center;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 15%;
    background: #EDEDED;
    text-align: center;
    border-radius: 10px;
`

const NameCaption = styled.div`
    position: absolute;
    left: 4%;
    right: 4%;
    top: 86%;
    bottom: 7%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: left;
    color: #1F1F1F;
`

const CompanyCaption = styled.div`
    position: absolute;
    left: 4%;
    right: 4%;
    top: 94%;
    bottom: 0%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #1F1F1F;
`

function NutrientsInfo({toLink, imgSrc, itemName, itemCompany}) {
    return(
        <Box> <Link to={toLink}>
            <BackImg>
                <Img src={imgSrc} alt="Nutrition" />
            </BackImg>
            <NameCaption> {itemName} </NameCaption>
            <CompanyCaption> {itemCompany} </CompanyCaption>
        </Link> </Box>
    );
}

export default NutrientsInfo;