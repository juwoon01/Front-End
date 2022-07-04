import React  ,{ useEffect } from 'react';
import styled from 'styled-components';
import { ColumnLayout, RowLayout } from '../../../themes/layout';
import Header from '../../organisms/Header';
import { useLocation } from 'react-router-dom';
import  useScript  from '../../../controllers/useScript'; 
const Home = ()=>{

    const status = useScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jxfm7ygqxg");
    const initMap = () => {
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(37.511337, 127.012084),
          zoom: 13,
        });
      };
    useEffect(() => {
        if (status === "ready") {
            initMap();
        } else if(status === "loading"){
            setTimeout(()=>{
                initMap();
            },150);
        }
    }, []);


 

    const location = useLocation();
    let isName;
    if(location.state != null){
        const state = location.state as {isName : string};
        isName = state.isName;
    }else{
        isName = '로그인';
    }

    return(
        <HomeWrrapper>
            <Header name={isName}/>
            <MappWrrapper id="map"></MappWrrapper>
            <SideBarWrrapper></SideBarWrrapper>
            <SearchInput placeholder = "분양 단지명을 검색해보세요"></SearchInput>
            <ContentWrrapper>
                <Content></Content>
            </ContentWrrapper>
        </HomeWrrapper>
    );
}

export  default Home;

const HomeWrrapper = styled.div`

`;

const MappWrrapper = styled(ColumnLayout)`
    position: absolute;
    width: 1042px;
    height: 811px;
    margin-top: 112px;
`;

const SideBarWrrapper = styled(RowLayout)`
    width: 398px;
    height: 811px;
    left: 1042px;
    top: 169px;
`;

const SearchInput = styled.input`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;

    position: absolute;
    width: 330px;
    height: 54px;
    left: 1076px;
    top: 189px;

    border: 2px solid #3B8319;
    color: #888888;
    text-align:center;
`;

const ContentWrrapper = styled(RowLayout)`

`;

const Content = styled(ColumnLayout)`
    box-sizing: border-box;

    position: absolute;
    width: 365px;
    height: 131px;
    left: 1057px;
    top: 266px;

    background: #FFFDFD;
    border: 1px solid #000000;
`;