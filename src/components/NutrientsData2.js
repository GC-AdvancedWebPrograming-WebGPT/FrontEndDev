import React from "react";
import styled from "styled-components";
import axios from "axios";
import NutrientsInfo2 from "./NutrientsInfo2";

const Wrapper = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`

const Box = styled.div`
    margin: 0 auto;
`

const HeadName = styled.h1`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    margin-left: 4%;
`

const PName = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    margin-left: 4%;
`

const targetLists = ({ typeString }) => {
    const empty = [
        {nutrientId:1, imageUrl:"", title:"검색 결과를 찾지 못했습니다"}
    ];

    var BASE_URL = 'http://localhost:8000';
    var PATH_URL = '/nutrient-service/api/nutrients/conditions?=';
    axios.defaults.withCredentials = true;

    axios.get(BASE_URL + PATH_URL + typeString, { headers: { "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjg1MjA1MzI1LCJleHAiOjE2ODUyMDg5MjV9.xHNJwLzoUJ5LHtubQ-dHJ4OpNXlAG_BiJrlqdGz9NFJhQyrSqdPXSzIKy4rBJxyky2w1t7V1j57Iw-w80EAvmA`}})
        .then(response => {
            console.log("RESPONSE : " + response);
            return response.data;
        })
        .catch(error => {
            console.log("ERROR : " + error.message);
            return empty;
        });
    return empty;
}

const NutrientItem = ({ dat }) => (
    <Box>
        <NutrientsInfo2 toLink={`/detail/${dat.nutrientId}`} imgSrc={dat.imageUrl} itemName={dat.title} itemCompany="자세히 보기" />
    </Box>
);


const NutrientsData2 = ({ type }) => {
    var targetData, h1Cont, pCont;
    var typeString = null;
    if (type === "1") {
        typeString = "fatigue";
        h1Cont = "비타민";
        pCont = "비타민을 먹으면 피로회복과 활력 증진에 도움이 됩니다"
    }
    else if (type === "2") {
        typeString = "digestion";
        h1Cont = "유산균";
        pCont = "유산균은 소화 기관을 건강하게 해요"
    }
    else if (type === "3") {
        typeString = "liver";
        h1Cont = "밀크씨슬";
        pCont = "밀크씨슬로 간을 지켜봐요"
    }
    else if (type === "4") {
        typeString = "eyes";
        h1Cont = "루테인";
        pCont = "눈이 피로한 당신에게, 루테인"
    }
    else if (type === "5") {
        typeString = "bone";
        h1Cont = "칼슘";
        pCont = "칼슘은 뼈와 치아의 구성 성분! 건강한 뼈를 원한다면 칼슘을!"
    }
    else {
        h1Cont = "올바른 카테고리가 아닙니다";
        pCont = "상단바에서 다른 카테고리를 찾아보세요"
    }
    
    targetData = targetLists({typeString});
    console.log(targetData);

    // targetData 부분이 실제 데이터셋 내용임
    return(
        <Wrapper>
            <HeadName>{h1Cont}</HeadName>
            <PName>{pCont}</PName>
            <Grid>
                {targetData.map((ndata) => (<NutrientItem dat={ndata} />))}
            </Grid>
        </Wrapper>
    );
    
};

export default NutrientsData2;