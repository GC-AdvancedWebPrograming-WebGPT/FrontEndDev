import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import profile from "../assets/dobi.png";

const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
`;

const Container = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 200px;

    background-color: #F2F2F2;
    display: flex;

`;

const ImageContainer = styled.div`
    margin-top: auto;
    margin-left: 50px;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;

    width: 100%;
    height: 100%;

`;

const Profile = styled.img`
    background-color: white;
    width: 160px;
    height: 180px;
    border-radius: 50%;
`;

const Text = styled.text`
    font-weight: bold;
`;

    const MyNutrientsContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 80px;

    border-left: 2px solid #4F7FDB;

`;


const NutrientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    width: 100%;


`;

const BoldText = styled.text`
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    display: flex;
    align-items: center;
    text-align: center;
`;
const Box = styled.div`
    position: relative;
    width: 267px;
    height: 476px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
`
const NameCaption = styled.div`
    position: absolute;
    left: 4%;
    right: 4%;
    top: 75%;
    bottom: 7%;
    margin-top: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 29px;
    text-align: left;
    color: #1F1F1F;
`
const accessToken = localStorage.accessToken


function MyPage(){

    const [user, setUSer] = useState("로그인을 해주세요");
    const [image, setImage] = useState("");
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/user-service/api/users/me',
        { headers: { "Authorization" : `Bearer ${accessToken}`}}
        ).then((res) => {
            console.log(res);
            setUSer(res.data.nickname)
            setImage(res.data.profileImageUrl)
            setMyList(res.data.userNutrients.userNutrients || [])
            console.log(Array.isArray(myList))
        })
    }, [])

    return(
        <Wrapper>
            <Header/>
            <Navigator/>
           <Container>
	        <InfoContainer>
                <InfoMainContainer>
                    <ProfileContainer>
                        <ProfileImage src={image}/>
                        <ProfileText>
                            {user}
                        </ProfileText>
                    </ProfileContainer>
                    <MyNutrientsContainer>
                        My 영양제<br/><br/>
                        <BoldText>2</BoldText> 개
                    </MyNutrientsContainer>
                </InfoMainContainer>

            </InfoContainer>
            <NutrientsContainer>

            <Grid>
            {myList && myList.map((it) => (<div key={it.nutrientId}>
                        <div>{it.title}</div>
                        <img src={it.imageUrl} alt={it.title} />
                    </div>
                ))}
                    
            </Grid>
                
            </NutrientsContainer>
	 </Container>
        </Wrapper>
    )
}

export default MyPage;