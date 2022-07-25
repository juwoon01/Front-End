import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import { ColumnLayout } from '../../themes/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const onClickSignIn = () => {
        if(email === ''){
            alert("이메일을 입력해주세요");
        } else if(passWord === ''){
            alert("비밀번호를 입력해주세요");
        } else{
            axios({
                method: 'post',
                url: 'https://129.154.195.162:8080/api/authenticate',
                data: {
                  password: passWord,
                  userid: email,
                }
            }).then((response) =>{
                console.log(response);
                navigate(`/`,{state: {isName: email}});
            }).catch((error) => {
                console.log(error);
            });
            
        }

    };

    const onClickKakaoSignIn = () => {

    };

    return(
        <SignInWrrapper>
            <Header name={'로그인'}/>
            <SignInMainWrrapper>
                <SignInInfoWrraper>
                    <EmailWrraper placeholder='이메일' onChange={(e) => {setEmail(e.currentTarget.value)}}/>
                    <PassWordWrraper placeholder='비밀번호' onChange={(e) => {setPassWord(e.currentTarget.value)}}/>
                    <SignInBtnWrraper onClick={onClickSignIn}>
                        로그인
                    </SignInBtnWrraper>
                    <SignInKakaoBtnWrraper onClick={onClickKakaoSignIn}>
                        카카오 로그인
                    </SignInKakaoBtnWrraper>
                </SignInInfoWrraper>
            </SignInMainWrrapper>
        </SignInWrrapper>
    );
}

export default SignIn;

const SignInWrrapper = styled.div`

`;

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #979797;
    border-radius: 5px;
    padding-left: 10px;
`;

const SignInMainWrrapper = styled(ColumnLayout)`
    align-items: center;
    justify-content: end;
`;

const SignInInfoWrraper = styled(ColumnLayout)`
    margin: 66px 342px;
    width: 395px;
    height: 561px;
    background: #FFFFFF;
    border: 1px solid #979797;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    align-items: center;

`;

const EmailWrraper = styled(Input)`
    width: 270px;
    height: 49px;
    margin-top: 157px;
    margin-bottom: 16px;
`;

const PassWordWrraper = styled(Input)`
    width: 270px;
    height: 49px;
    margin-bottom: 63px;
`;

const SignInBtnWrraper = styled.button`
    width: 270px;
    height: 49px;
    margin-bottom: 20px;
    background: rgba(13, 27, 97, 0.819434);
    border: 1px solid #979797;
    border-radius: 5px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`;


const SignInKakaoBtnWrraper = styled.button`
    width: 270px;
    height: 49px;
    background: rgba(16, 72, 230, 0.819434);
    border: 1px solid #979797;
    border-radius: 5px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`;