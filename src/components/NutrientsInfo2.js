import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Box = styled.div`
    position: relative;
    width: 267px;
    height: 476px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
`

const Img = styled.img`
    margin: auto;
    display: block;
    width: 95%;
    height: 95%;
    object-fit: contain;
`
const BackImg = styled.div`
    align-items:center; 
    display: flex; 
    justify-content:center;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 25%;
    background: #EDEDED;
    text-align: center;
    border-radius: 10px;
`

const NameCaption = styled.div`
    position: absolute;
    left: 4%;
    right: 4%;
    top: 75%;
    bottom: 7%;
    margin-top: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
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
    margin-top: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #1F1F1F;
`

function NutrientsInfo2({toLink, imgSrc, itemName, itemCompany}) {
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

export default NutrientsInfo2;