import React from "react";
import styled from "styled-components";
import ButtonCondition from "./ButtonCondition";
import { useDispatch } from "react-redux";
import { changeCondition } from "../store/actions/changeCondition";

const Wrapper = styled.table`
    width: 90%;
    height: 100px;
    background-color: #F7F7F7;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`

const Header = styled.div`
    width: 90%;
    height: 30px;
    margin-top: 25px;
    margin-bottom: 35px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
`

const ChooseCondition = ({selectedCondition}) => {

    const dispatch = useDispatch();
    const handleConditionChange = (conditionID) => {
        dispatch(changeCondition(conditionID));
    };

    // selected bgColor = "#A7D9FF"
    var targ = Number(selectedCondition);
    let Colors = ["#000000, #000000, #000000, #000000, #000000"];
    if(targ > 0) Colors[targ-1] = "#A7D9FF";

    return(
        <Wrapper>
            <tr>
                <td width="30%"> <Header>종류별 영양제</Header> </td>
                <td width="14%"> <ButtonCondition bgColor={Colors[0]} ButtonName="비타민" btnID="1" onConditionChange={handleConditionChange}/> </td>
                <td width="14%"> <ButtonCondition bgColor={Colors[1]} ButtonName="유산균" btnID="2" onConditionChange={handleConditionChange}/> </td>
                <td width="14%"> <ButtonCondition bgColor={Colors[2]} ButtonName="밀크씨슬" btnID="3" onConditionChange={handleConditionChange}/> </td>
                <td width="14%"> <ButtonCondition bgColor={Colors[3]} ButtonName="루테인" btnID="4" onConditionChange={handleConditionChange}/> </td>
                <td width="14%"> <ButtonCondition bgColor={Colors[4]} ButtonName="칼슘" btnID="5" onConditionChange={handleConditionChange}/> </td>
            </tr>
        </Wrapper>
    );
}

export default ChooseCondition