import React from "react";
import styled from "styled-components";
import ButtonCategory from "./ButtonCategory";
import { useDispatch } from "react-redux";
import * as imgs from "../assets/category_shapes/index";
import { changeCategory } from "../store/actions/changeCategory";

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

const ChooseCategory = ({selectedCategory}) => {
    // selectedCategory는 0부터 6 사이의 정수 중 하나임.
    //non selected bgColor = "#A7D9FF";
    //selected bgColor = "#4F7FDB";
    const dispatch = useDispatch();
    const handleCategoryChange = (categoryID) => {
        dispatch(changeCategory(categoryID));
      };

    var targ = Number(selectedCategory);
    let Colors = ['#A7D9FF','#A7D9FF','#A7D9FF','#A7D9FF','#A7D9FF','#A7D9FF'];
    if (targ > 0) Colors[targ-1] = "#4F7FDB";

    return(
        <Wrapper>
            <tr>
                <td width="28%"> <Header >카테고리별 영양제</Header> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Energy} bgColor={Colors[0]} tagName="피로/활력" btnID="1" onCategoryChange={handleCategoryChange}/> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Stomach} bgColor={Colors[1]} tagName="소화" btnID="2" onCategoryChange={handleCategoryChange}/> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Cheers} bgColor={Colors[2]} tagName="간 건강" btnID="3" onCategoryChange={handleCategoryChange}/> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Eye} bgColor={Colors[3]} tagName="눈 건강" btnID="4" onCategoryChange={handleCategoryChange}/> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Bone} bgColor={Colors[4]} tagName="뼈 건강" btnID="5" onCategoryChange={handleCategoryChange}/> </td>
                <td width="12%"> <ButtonCategory imgSrc={imgs.Threedots} bgColor={Colors[5]} tagName="기타" btnID="6" onCategoryChange={handleCategoryChange}/> </td>
            </tr>
        </Wrapper>
    );
}

export default ChooseCategory;