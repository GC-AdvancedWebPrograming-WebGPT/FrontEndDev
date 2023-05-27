import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import DetailSection from "../components/DetailSection";
import DetailFooter from "../components/DetailFooter";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
`;

/*
nutrients:{
    nutrientId:Long
    title:String
    content:String
    String:manual
    String:imageUrl
    comments:{
        commentId:Long
        content:String
        userId:Long
        createdAt:String
    }
}
 */

function Detail(props){

    /*
    var BASE_URL = 'http://localhost:8000';
    var PATH_URL = '/api/nutrients/';
    const empty = [
        {nutrientId:1, title:"검색 결과를 찾지 못했습니다", content:"대충 이런 정보가 있습니다", imageUrl:"" , manual:"대충 이렇게 드세요", 
        comments:{}}
    ];

    useEffect(() => {
        axios.get(BASE_URL + PATH_URL + "1")
            .then((response) => {
                console.log("RESPONSE : " + response);
            })
            .catch((error) => {
                console.log("ERROR : " + error);
            });
    })
    */

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