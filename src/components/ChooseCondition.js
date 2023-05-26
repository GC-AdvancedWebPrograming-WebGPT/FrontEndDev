import React from "react";
import styled from "styled-components";
import { conditionChange } from "../store/actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";

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

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    background: ${(props) => props.background};
`

const Tag = styled.p`
    margin-bottom: 0px;
    position: absolute;
    left: 0%;
    right: 0%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 40px;
    text-align: center;
`

const ChooseCondition = () => {

    const selector = useSelector( (state) => state )
    const dispatch = useDispatch();
    const color = "#7CBFF5";

    return(
        <Wrapper>
            <tr>
                <td width="30%"> <Header>종류별 영양제</Header> </td>
                <td width="14%"> <Box onClick={() => dispatch(conditionChange(0))}>
                    <Tag> 비타민 </Tag> </Box> </td>
                <td width="14%"> <Box onClick={() => dispatch(conditionChange(1))}>
                    <Tag> 유산균 </Tag> </Box> </td>
                <td width="14%"> <Box onClick={() => dispatch(conditionChange(2))}>
                    <Tag> 밀크씨슬 </Tag> </Box> </td>
                <td width="14%"> <Box onClick={() => dispatch(conditionChange(3))}>
                    <Tag> 루테인 </Tag> </Box> </td>
                <td width="14%"> <Box onClick={() => dispatch(conditionChange(4))}>
                    <Tag> 칼슘 </Tag> </Box> </td>
            </tr>
        </Wrapper>
    );
}

export default ChooseCondition