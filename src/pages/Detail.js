import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import DetailSection from "../components/DetailSection";
import DetailFooter from "../components/DetailFooter";

const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
`;

function Detail(props){
    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            <DetailSection nutrients={props.nutrients}/>
            <DetailFooter nutrients={props.nutrients}/>
        </Wrapper>
    );
}

export default Detail;