import React from "react";
import ChooseCondition from "../components/ChooseCondition";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { changeCondition } from "../store/actions/changeCondition";
import NutrientsData2 from "../components/NutrientsData2";

const Wrapper = styled.div`
    width: 100%;
`;

function Conditions (){
    const conditionID = useSelector((state) => state.condition.conditionID);
    const dispatch = useDispatch();

    const handleConditionChange = (conditionID) => {
        dispatch(changeCondition(conditionID));
    };
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <ChooseCondition
              selectedCondition={conditionID}
              onConditionChange={handleConditionChange}
            />
            <NutrientsData2 type={conditionID} />
            <Footer/>
        </Wrapper>
    );
}
export default Conditions;