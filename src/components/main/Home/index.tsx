import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';

const Home = ()=>{
    return(
        <HomeWrrapper>
            <Header name={'로그인'}/>
        </HomeWrrapper>
    );
}

export  default Home;

const HomeWrrapper = styled.div`

`;