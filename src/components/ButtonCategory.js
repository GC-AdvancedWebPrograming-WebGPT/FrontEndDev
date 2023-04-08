import React from 'react';
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../pages/Categories";

const StyledButtonCategory = styled.button`
    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 100px;
    height: 100px;
    background: ${(props) => props.background};
    border: none;
    border-radius: 20px;
`;

const Img = styled.img`
    left: 30%;
    right: 30%;
    top: 20%;
    bottom: 20%;
`

const Tag = styled.p`
    margin-top: 5px;
    margin-bottom: 0px;
    position: absolute;
    left: 0%;
    right: 0%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
`

const Box = styled.div`
    position: relative;
    width: 100px;
    height: 130px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`

function ButtonCategory ({imgSrc, bgColor, tagName, btnID}) {
    //non selected bgColor = "#A7D9FF";
    //selected bgColor = "#4F7FDB";
    const {changeCategory} = useContext(AppContext);

    return (
        <Box onClick={() => changeCategory(btnID)}>
            <StyledButtonCategory background={bgColor}>
                <Img src={imgSrc} alt="category" />
            </StyledButtonCategory>
            <Tag>{tagName}</Tag>
        </Box>
        
    );
}

export default ButtonCategory;