import React from "react";
import styled from "styled-components";
import imgSrc from "../assets/dobi.png"

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    display: flex;
`;

const LeftDiv = styled.div`
    width: 40%;
    float: left;
    margin-left: 10%;
`;

const Img = styled.img`
    width: 500px;
    height: 500px;
`

const RightDiv = styled.div`
    width: 30%;
    float: right;
    margin-right: 10%;
`;

const DetailTitleDiv = styled.div`
    width: 2200px;
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    position: relative;
`;

const BuyButton = styled.button`
    width: 130px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: #A7D9FF;
    margin-left: 20%;
`

const Hr = styled.hr`
    width: 700px;
    float: left;
`

const Detailbriefexplanation = styled.div`
    position: relative;
`;

const DetailUsage = styled.div`
    position: relative;
`;

const MyNutritionAddDiv = styled.div`
    position: relative;
`;

const MyNutritionAddButton = styled.button`
    padding: 20px;
    width: 250px;
    height: 70px;
    border-radius: 10px;
    border: none;
    background-color: #7CBFF5;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 90%;
`;

const DetailSection = () =>{
    return(
        <Wrapper>
            <LeftDiv>
                <Img src={imgSrc} alt="Detail" />
            </LeftDiv>
            <RightDiv>
                <DetailTitleDiv>
                    <Title>Nutritions 1</Title>
                    <BuyButton>{"➡구매처 바로가기"}</BuyButton>
                </DetailTitleDiv>
                <Hr></Hr>
                <Detailbriefexplanation>
                    <br/>
                    <h4>L-테아닌 성분과 멜라토닌 함유량이 높은 세인트존스워트분말, 캐모마일 등 부원료를 함께 담아 스트레스로 인한 긴장 완화에 도움을 줄 수 있습니다.</h4>
                </Detailbriefexplanation>
                <Hr></Hr>
                <DetailUsage>
                    <br/>
                    <h4>용법 및 용량 | 1일 2회 1알 복용</h4>
                </DetailUsage>
                <Hr></Hr>
                <br/>
                <br/>
                <br/>
                <MyNutritionAddDiv>
                    <MyNutritionAddButton>
                        My 영양제에 추가하기
                    </MyNutritionAddButton>
                </MyNutritionAddDiv>
            </RightDiv>
        </Wrapper>
    );
}

export default DetailSection;