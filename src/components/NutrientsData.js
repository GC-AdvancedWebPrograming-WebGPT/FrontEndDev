import React from "react";
import * as imgs from "../assets/nutrient_pics"
import NutrientsInfo from "./NutrientsInfo"
import styled from "styled-components";

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

const empty = [];
const vigor = [
      {id:1, name: "고려은단 멀티비타민 올인원 1560mg 60정", company: "고려은단", pics: imgs.Img1,
    comment:"Test",
    shoplink:"https://brand.naver.com/koreaeundanhc/products/5288465421NaPm=ct%3Dlg0n7ieg%7Cci%3D90718562ae2da8cfa8ac563ca34a2d971f0aa63e%7Ctr%3Dslcf%7Csn%3D1444796%7Chk%3Dde2df7fb9abcc89167674278c963591631de3fd1"}
    , {id:2, name: "뉴트리코어 멀티비타민 미네랄 500mg x 180정 ", company: "뉴트리코어", pics: imgs.Img2,
    comment:"Test",
    shoplink:"https://brand.naver.com/nutricore/products/384509110?NaPm=ct%3Dlg0na2zs%7Cci%3Dd49b6b7e2ebc328f1011c3ce67f12e61123dbe73%7Ctr%3Dslcf%7Csn%3D358231%7Chk%3D155f6b517cf367b548df2885c95a9db6d9666d5e"}
    , {id:3, name: "네츄럴라이프얼라이브 얼라이브 멀티비타민 1724mg x 100정", company: "네츄럴라이프얼라이브", pics: imgs.Img3,
    comment:"Test",
    shoplink:"https://shopping.naver.com/window-products/healthy/7937114186?NaPm=ct%3Dlg0nb7w0%7Cci%3D3a9ead9293877f6395ad0fba16b859fc9c88d54d%7Ctr%3Dslcf%7Csn%3D966092%7Chk%3D98f9e55065297735e7d19b0d6e17648246f7c20b"}
    , {id:4, name: "센트룸 멀티비타민 포 우먼 1418mg x 50정", company: "센트룸", pics: imgs.Img4,
    comment:"Test",
    shoplink:"https://brand.naver.com/centrum/products/6280744941?NaPm=ct%3Dlg0ndelc%7Cci%3De337c996895e971dee1903fe599be482d37ba808%7Ctr%3Dslcf%7Csn%3D339120%7Chk%3D84b2d9ac36d7c7b8a6a51fadd8bbc26ee699f7be"}
    , {id:5, name: "멀티비타민 오쏘몰 이뮨 30일분 1박스(30일분)", company: "오쏘몰", pics: imgs.Img5,
    comment:"Test",
    shoplink:"https://brand.naver.com/dapharm/products/5684175077?NaPm=ct%3Dlg0ney5c%7Cci%3Db5493f60f6f7efb42f4737c8b24d07280cca7b47%7Ctr%3Dslcf%7Csn%3D2792751%7Chk%3D36909d564a2cd6214da64044694df746182509e7"}

];

const NutrientItem = ({ dat }) => (
    <Box>
        <NutrientsInfo toLink="/ChooseDetail" imgSrc={dat.pics} itemName={dat.name} itemCompany={dat.company} />
    </Box>
);

const NutrientsData = ({ type }) => {
    var targetData, h1Cont, pCont;
    if (type === "1") {
        targetData = vigor;
        h1Cont = "피로/활력";
        pCont = "피로 / 활력 고민엔 비타민 어떤가요?"
    }
    else {
        targetData = empty;
        h1Cont = "123";
        pCont = "123"
    }

    return(
        <Wrapper>
            <HeadName>{h1Cont}</HeadName>
            <PName>{pCont}</PName>
            <Grid>
                {targetData.map((ndata) => (<NutrientItem dat={ndata} />))}
            </Grid>
        </Wrapper>
    )
};

export default NutrientsData;