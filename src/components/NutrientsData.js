import React from "react";
import NutrientsInfo from "./NutrientsInfo";
import styled from "styled-components";
import axios from "axios";

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

/*
    const empty = [];
    const nutrientList_vigor = [
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
    const nutrientList_digestion = [
        {id:6, name: "락토핏 골드 2g x 50포", company: "종근당", pics: imgs.Img6,
        comment:"Test",
        shoplink:"https://brand.naver.com/ckdhc/products/8302714433?NaPm=ct%3Dlg0nn3cw%7Cci%3Db244276bd450811943a692dba69d4de67a79998d%7Ctr%3Dslbrc%7Csn%3D202775%7Chk%3Da9e9de98d64ce1543818a581a16af78187c6d409"}
        , {id:7, name: "뉴네이처 바이탈 프리미엄 프로바이오틱스 유산균 500mg x 60캡슐", company: "뉴네이처", pics: imgs.Img7,
        comment:"Test",
        shoplink:"https://smartstore.naver.com/realtrue/products/4675094470?NaPm=ct%3Dlg0no90w%7Cci%3D8c8f37b79d531ed3c7eaaf92036da64a5cf0acca%7Ctr%3Dslbrc%7Csn%3D694393%7Chk%3Dec86d0896c546369ba896916b15b364fa66e749b"}
        , {id:8, name: "덴프스 덴마크 유산균이야기 LGG유산균 2박스 / 총 4 개월분", company: "덴프스", pics: imgs.Img8,
        comment:"Test",
        shoplink:"https://brand.naver.com/denps/products/4786014390?NaPm=ct%3Dlg0nqeyg%7Cci%3Dbdb86c3060ae323a9ba3bbcc2c7d1f10dbcca5f4%7Ctr%3Dslcf%7Csn%3D397098%7Chk%3Dcb91a4f49a71b9bec8024c9e25081150daf5d4ba"}
        , {id:9, name: "GNM자연의품격 100억 프로바이오틱스 500mg x 60캡슐", company: "GNM자연의품격", pics: imgs.Img9,
        comment:"Test",
        shoplink:"https://shopping.naver.com/window-products/healthy/5174410693?NaPm=ct%3Dlg0nq3ds%7Cci%3D2eaeffde321572475b55ec0dcfe375908472a842%7Ctr%3Dslcf%7Csn%3D202062%7Chk%3D422a25b625bd079dda415c5b34b80e60b069ab6f"}
        , {id:10, name: "다이어트 유산균 비에날씬 450mg x 60캡슐", company: "비에날씬", pics: imgs.Img10,
        comment:"Test",
        shoplink:"https://brand.naver.com/bnrmall/products/4411276919?NaPm=ct%3Dlg0noklk%7Cci%3Da5ed4049e1cefc045ab318d599cd6c7bd2a7eef3%7Ctr%3Dslcf%7Csn%3D906722%7Chk%3Db5b80a57a1359edd2befb0bae82475dc19ab9034"}
    ];
    const nutrientList_liver = [
        {id:11, name: "해나우푸드 실리마린 밀크씨슬 300mg x 200캡슐", company: "해나우푸드", pics: imgs.Img11,
        comment:"Test",
        shoplink:"https://search.shopping.naver.com/catalog/21515439233?query=%EB%B0%80%ED%81%AC%EC%94%A8%EC%8A%AC&NaPm=ct%3Dlg0nunqg%7Cci%3D26413d48fa700d8e3aa19fadf67d15acb3c937a8%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D1df738c890013d50da22325dc957388e192009a6"}
        , {id:12, name: "락티브 간에 좋은 유기농 밀크씨슬 실리마린 500mg x 60정", company: "락티브", pics: imgs.Img12,
        comment:"Test",
        shoplink:"https://brand.naver.com/lactiv/products/6019229792?NaPm=ct%3Dlg0nyfjc%7Cci%3Dee114f09da68376f407472f7eaa92da71fb463fa%7Ctr%3Dslcf%7Csn%3D2528238%7Chk%3Da0b2e6198d5ae11c78d67fa397bcfe3a907f7344"}
        , {id:13, name: "고려은단 퓨어 밀크씨슬 500mg x 60캡슐", company: "고려은단", pics: imgs.Img13,
        comment:"Test",
        shoplink:"https://brand.naver.com/koreaeundanhc/products/5152846746?NaPm=ct%3Dlg0nzw08%7Cci%3D328c7cb072baace88b8e973a0108b2feff1309b1%7Ctr%3Dslcf%7Csn%3D1444796%7Chk%3Ddb38b9b24ad5c2aaec7ac57446174acde5c193d1"}
        , {id:14, name: "뉴트리코어 유기농 밀크씨슬 1000mg x 30정", company: "뉴트리코어", pics: imgs.Img14,
        comment:"Test",
        shoplink:"https://brand.naver.com/nutricore/products/2019954468?NaPm=ct%3Dlg0nzi48%7Cci%3D7f926d3bb8f8921f055cfe76f027c38e6e3d55c1%7Ctr%3Dslcf%7Csn%3D358231%7Chk%3Dd8d9f841aedc3d2fe467f643b456948e294afd7b"}
        , {id:15, name: "대웅제약 에너씨슬 콜레다운 850mg x 30캡슐", company: "대웅제약", pics: imgs.Img15,
        comment:"Test",
        shoplink:"https://brand.naver.com/dwmall/products/4844301061?NaPm=ct%3Dlg0o0czc%7Cci%3Dc4c5ff2ac2c102b8a96266e47f1280fc1511a6b7%7Ctr%3Dslbrc%7Csn%3D1079418%7Chk%3Da12ea499850a884d53a870764ba2fc1578002421"}
    ];
    const nutrientList_eye = [
        {id:16, name: "루테인 지아잔틴 미니", company: "안국건강", pics: imgs.Img16,
        comment:"Test",
        shoplink:"https://www.shopagh.com/goods/goods_view.php?goodsNo=1000000548&mtn=109%5E%7C%5E전제품보기_건강고민별%5E%7C%5Ey"}
        , {id:17, name: "아이클리어 루테인아스타잔틴", company: "종근당건강", pics: imgs.Img17,
        comment:"눈 피로와 노화를 동시에 케어 1일 1회, 1회 1캡슐",
        shoplink:"http://www.ckdhc.com/product/productView.do?r=CKD_CATE00000002&category=CKD_CATE00000013&prodCode=CHC0000001"}
        , {id:18, name: "루테인 지아잔틴 164 알티지오메가3", company: "뉴트리원", pics: imgs.Img18,
        comment:"루테인과 오메가3로 눈 노화와 건조함 동시에 케어 1일 1회, 1회 1캡슐",
        shoplink:"https://www.nutrione.co.kr/item/dtl/1000000577"}
        , {id:19, name: "닥터에스더 식물성 알티지 오메가3", company: "닥터에스더", pics: imgs.Img19,
        comment:"1일 1회, 1회 2캡슐",
        shoplink:"https://www.esthermall.co.kr/shop/detail.php?pno=75AC2C91D93EFBA8651671F18EC013D0&utm_source=naver_sa&utm_medium=cpc&utm_campaign=general&utm_content=BLCIR_OMEGA3_RTGOMEGA&utm_term=04_혈행_알티지오메가모음__PC-00_대표_오메가3-오메가3&NaPm=ct%3Dlg0w6320%7Cci%3D0ze0001%5FQwDyOWbn%5F1pU%7Ctr%3Dsa%7Chk%3D34462183811cd866e59805f2ad8ea56da0b95bd3"}
        , {id:20, name: "퓨어 rTG DHA 오메가3 식물성캡슐", company: "고려은단", pics: imgs.Img20,
        comment:"혈행건강은 기본, 기억력 개선까지 한번에! 1일 1회, 1회 2캡슐",
        shoplink:"https://search.shopping.naver.com/catalog/33862803619?cat_id=50002447&frm=NVSCPRO&query=고려은단+오메가3&NaPm=ct%3Dlg0y3bc8%7Cci%3Df83783dec1252c8cb9ae7ae7b80fbc6798489321%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D6198f2cbbbdffdf4bad4e82f2602e37ba52c37d4"}
    ];
    const nutrientList_bone = [
        {id:21, name: "닥터에스더 어골칼슘 프리미엄", company: "에스더 포뮬라", pics: imgs.Img21,
        comment:"체내 칼슘흡수 촉진 및 골다공증 예방 1일 1회, 1회 1포",
        shoplink:"https://www.esthermall.co.kr/shop/detail.php?pno=B445E314138101EECC58503E98AA2B2D&ref=naver_open&NaPm=ct%3Dlg0y5lwg%7Cci%3D95237d6c815972768cea26ede76fb90279c3e83d%7Ctr%3Dsls%7Csn%3D170097%7Chk%3D195d3d1f0d446e7e974aa1dc827066776785515a"}
        , {id:22, name: "칼슘앤 마그네슘 비타민D", company: "종근당건강", pics: imgs.Img22,
        comment:"1일 1회, 1회 2정",
        shoplink:"https://search.shopping.naver.com/catalog/13452217992?cat_id=50002443&frm=NVSCPRO&query=종근당건강칼슘마그네슘&NaPm=ct%3Dlg0y7688%7Cci%3Dc9f1bdcaec4cdd318615bbb0b34ef812d624d74d%7Ctr%3Dsls%7Csn%3D95694%7Chk%3De70abe02079bd020b2439e0d70450ed0cfb19cb4"}
        , {id:23, name: "뉴트리코어 칼슘마그네슘디", company: "뉴트리코어", pics: imgs.Img23,
        comment:"1일 1회, 1회 3정",
        shoplink:"https://www.nutricore.co.kr/goods/view?no=95"}
        , {id:24, name: "쁘띠앤 국민 칼마디", company: "쁘띠앤", pics: imgs.Img24,
        comment:"1일 1회, 1회 2정",
        shoplink:"https://www.apharmhealth.co.kr/product/쁘띠앤-국민-칼마디-1개월/59/category/42/display/1/"}
        , {id:25, name: "닥터아돌 칼슘마그네슘비타민D+", company: "닥터아돌", pics: imgs.Img25,
        comment:"1일 1회, 1회 2정",
        shoplink:"http://dradol.com/product/detail.html?product_no=28&cate_no=48&display_group=1"}
    ];
    const nutrientList_etc = [
        {id:26, name: "우리의 귀여운 친구 보노보노", company: "몰라 귀여워서 넣음", pics: imgs.Img26,
        comment:"Test",
        shoplink:""}
        , {id:12345, name: "도비는 저기에 팔리기 싫어요!", company: "영화", pics: dobi,
        comment:"Test",
        shoplink:""}
    ];
*/

const targetLists = ({ typeString }) => {
    const empty = [
        {nutrientId:1, imageUrl:"", title:"검색 결과를 찾지 못했습니다"}
    ];


    var BASE_URL = 'http://localhost:8000';
    var PATH_URL = '/nutrient-service/api/nutrients/categories?=';
    var token = "111";
    axios.defaults.withCredentials = true;
    axios.get(BASE_URL + PATH_URL + typeString, { headers: { "Authorization" : `Bearer ${token}`}})
        .then(response => {
            console.log("RESPONSE : " + response);
            return response.data;
        })
        .catch(error => {
            console.log("ERROR : " + error.message);
            return empty;
        });
}

const NutrientItem = ({ dat }) => (
    <Box>
        <NutrientsInfo toLink={`/detail/${dat.nutrientId}`} imgSrc={dat.imageUrl} itemName={dat.title} itemCompany="자세히 보기" />
    </Box>
);

const NutrientsData = ({ type }) => {
    var targetData, h1Cont, pCont;
    var typeString = null;
    if (type === "1") {
        typeString = "fatigue";
        h1Cont = "피로/활력";
        pCont = "피로 / 활력 고민엔 비타민 어떨까요?"
    }
    else if (type === "2") {
        typeString = "digestion";
        h1Cont = "소화";
        pCont = "소화 고민엔 유산균 어떨까요?"
    }
    else if (type === "3") {
        typeString = "liver";
        h1Cont = "간 건강";
        pCont = "간 건강엔 밀크씨슬 어떨까요?"
    }
    else if (type === "4") {
        typeString = "eyes";
        h1Cont = "눈 건강";
        pCont = "눈 건강엔 루테인 어떨까요?"
    }
    else if (type === "5") {
        typeString = "bone";
        h1Cont = "뼈 건강";
        pCont = "뼈 건강엔 칼슘 어떨까요?"
    }
    else if (type === "6") {
        h1Cont = "기타";
        pCont = "그 외에도 이런 영양제를 추천해요!"
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

export default NutrientsData;