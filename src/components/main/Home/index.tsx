import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import { useLocation } from 'react-router-dom';

const Home = ()=>{
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
        </HomeWrrapper>
    );
}

export  default Home;

const HomeWrrapper = styled.div`

`;