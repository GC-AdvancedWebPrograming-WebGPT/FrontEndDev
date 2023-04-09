import React from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    display: flex;
`;

const LeftDiv = styled.div`
    width: 40%;
    float: left;
    margin-left: 15%;
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
    margin-left: 12.2%;
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
    width: 700px;
`;

const MyNutritionAddButton = styled.button`
    position: absolute;
    padding: 20px;
    width: 250px;
    height: 70px;
    border-radius: 10px;
    border: none;
    background-color: #7CBFF5;
    color: white;
    font-weight: bold;
    font-size: 16px;
    right: 0;
`;

const DetailSection = (props) =>{
    const { id } = useParams();
    return(
        <Wrapper>
            <LeftDiv>
                <Img src={process.env.PUBLIC_URL + '/nutrient_pics/image '+ (Number(id) + 1)+'.png'} alt="Detail" />
            </LeftDiv>
            <RightDiv>
                <DetailTitleDiv>
                    <Title>{ props.nutrients[id].title }</Title>
                    <BuyButton onClick={() => window.open(props.nutrients[id].buyurl, '_blank')}>{"➡구매처 바로가기"}</BuyButton>
                </DetailTitleDiv>
                <Hr></Hr>
                <Detailbriefexplanation>
                    <br/>
                    <h4>{ props.nutrients[id].content }</h4>
                </Detailbriefexplanation>
                <Hr></Hr>
                <DetailUsage>
                    <br/>
                    <h4>용법 및 용량 | { props.nutrients[id].usage }</h4>
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