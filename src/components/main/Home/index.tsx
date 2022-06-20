import React  ,{ useEffect } from 'react';
import styled from 'styled-components';
import { ColumnLayout } from '../../../themes/layout';
import Header from '../../organisms/Header';
import { useLocation } from 'react-router-dom';
import  useScript  from '../../../controllers/useScript'; 
const Home = ()=>{

    const status = useScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jxfm7ygqxg");
    useEffect(() => {
        if (status === "ready") {
            const initMap = () => {
                const map = new naver.maps.Map("map", {
                  center: new naver.maps.LatLng(37.511337, 127.012084),
                  zoom: 13,
                });
              };
            initMap();
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
            <div>main page</div>
            <MappWrrapper id="map"></MappWrrapper>
        </HomeWrrapper>
    );
}

export  default Home;

const HomeWrrapper = styled.div`

`;

const MappWrrapper = styled.div`
    width: 90%;
    height: 600px;
`;