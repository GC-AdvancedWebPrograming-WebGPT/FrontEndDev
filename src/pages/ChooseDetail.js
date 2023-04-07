import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import DetailSection from "../components/DetailSection";
import DetailFooter from "../components/DetailFooter";
import ChooseCategory from "../components/ChooseCategory";

const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
`;

function ChooseDetail(){
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <ChooseCategory/>
            <DetailSection/>
            <DetailFooter/>
        </Wrapper>
    )
}

export default ChooseDetail;