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

function ChooseDetail(){

    return(
        <Wrapper>
            <Header/>
            <Navigator/>
            
            <DetailSection/>
            <DetailFooter/>
        </Wrapper>
    );
    // 중간에 "<ChooseCategory selectedCategory="1"/>" 삭제 (일시적인 오류)
}

export default ChooseDetail;