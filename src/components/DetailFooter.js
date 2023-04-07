import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position : relative;
    transform : translateY(-100%);   
    width: 90%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 300px;
    margin-bottom: auto;
    display: flex;
    
`;

const DetailFooterDiv = styled.div`
    width: 100%;
`;

const Button = styled.button`
    position: relative;
    border: none;
    background: white;
    &.menu__list:hover{
        font-weight: bold;
        
    }
    &.menu_list--active{
        font-weight: bold;
        box-shadow: 0 5px blue;
    }
`;

const Hr = styled.hr`
    width: 100%;
`

const Text = styled.text`
    padding-top: 25px;
    padding-left: 50px;
    font-weight: bold;
`;

const DetailFooter = () => {
    const [detailMenu, setDetailMenu] = useState([true, false]);
    const [isClick1, setIsClick1] = useState(true);
    return(
        <Wrapper>
            <DetailFooterDiv>
                <Button
                className={detailMenu[0]?"menu_list--active":"menu__list"}
                onClick={() => {
                    setDetailMenu([true, false]);
                    setIsClick1(true);
                }}>
                    제품 상세 설명
                </Button>
                <Button
                className={detailMenu[1]?"menu_list--active":"menu__list"}
                onClick={() => {
                    setDetailMenu([false, true]);
                    setIsClick1(false);
                }}>
                    성분 정보
                </Button>
                <Hr></Hr>
                {
                    (function () {
                        if(isClick1 !== true) {
                            return (
                                <div>
                                    <Text>제품 상세 설명 페이지</Text>
                                </div>
                            );
                        }
                        else {
                            return ( function() {
                                return (
                                    <div>
                                        <Text>성분 정보 페이지</Text>
                                    </div>
                                );
                            })()
                        }
                    })()
                }
            </DetailFooterDiv>
        </Wrapper>
    );
}

export default DetailFooter;