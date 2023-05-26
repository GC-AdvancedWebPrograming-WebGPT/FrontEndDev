import React from "react";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import styled from "styled-components";
import Footer from "../components/Footer";
import ChooseCondition from "../components/ChooseCondition";

const Wrapper = styled.div`
    width: 100%;
`;

function Conditions (){
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <ChooseCondition/>
            <Footer/>
        </Wrapper>
    );
}
export default Conditions;