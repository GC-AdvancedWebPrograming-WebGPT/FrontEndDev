import React from "react";
import styled from "styled-components";
import ButtonCategory from "./ButtonCategory";
import * as imgs from "../assets/category_shapes/index";

const Wrapper = styled.table`
    width: 90%;
    height: 180px;
    background-color: #F7F7F7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`


const Header = styled.div`
    width: 90%;
    height: 30px;
    margin-top: 50px;
    margin-bottom: 60px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
`

function ChooseCategory({selectedCategory}) {
    // selectedCategory는 0부터 6 사이의 정수 중 하나임.


    return(
        <Wrapper>
            <tr>
                <td width="28%"> <Header>카테고리별 영양제</Header> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Energy} bgColor="#A7D9FF" tagName="피로/활력"/> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Stomach} bgColor="#A7D9FF" tagName="소화"/> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Cheers} bgColor="#A7D9FF" tagName="간 건강"/> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Eye} bgColor="#A7D9FF" tagName="눈 건강"/> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Bone} bgColor="#A7D9FF" tagName="뼈 건강"/> </td>
                <td width="12%"> <ButtonCategory toLink="/conditions" imgSrc={imgs.Threedots} bgColor="#A7D9FF" tagName="기타"/> </td>
            </tr>
        </Wrapper>
    );
}

export default ChooseCategory;