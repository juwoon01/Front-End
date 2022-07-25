import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ColumnLayout } from '../../themes/layout';
import Header from '../organisms/Header';
import axios from 'axios';

const SignUp = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const onClickSignUP = () =>{
        if (passWord === '') {
            alert('비밀번호를 입력해 주세요');
        } else if(email === ''){
            alert('이메일을 입력해 주세요');
        } else if(name === ''){
            alert('이름을 입력해 주세요');
        } else{
            axios({
                method: 'post',
                url: 'https://129.154.195.162:8080/api/signup',
                data: {
                  username: name,
                  password: passWord,
                  userid: email,
                  nickname: name
                }
            }).then((response) =>{
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        if(name.length > 10){
            console.log('use effect');
        }
    }, [name, email]);



    return(
        <SignUpWrrapper>
            <Header name={'로그인'}/>
            <SignUpMainWrrapper>
                <SignUpInfoWrraper>
                    <NameWrraper placeholder='이름' onChange={(e) => {setName(e.currentTarget.value)}}/>
                    <EmailWrraper placeholder='이메일' onChange={(e) => {setEmail(e.currentTarget.value)}}/>
                    <PassWordWrraper placeholder='비밀번호' onChange={(e) => {setPassWord(e.currentTarget.value)}}/>
                    <SignUpBtnWrraper onClick={onClickSignUP}>
                        회원가입
                    </SignUpBtnWrraper>
                </SignUpInfoWrraper>
            </SignUpMainWrrapper>
        </SignUpWrrapper>
    );
}

export  default SignUp;

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #979797;
    border-radius: 5px;
    padding-left: 10px;
`;

const SignUpWrrapper = styled(ColumnLayout)`

`;

const SignUpMainWrrapper = styled(ColumnLayout)`
    align-items: center;
    justify-content: end;
`;

const SignUpInfoWrraper = styled(ColumnLayout)`
    margin: 66px 342px;
    width: 395px;
    height: 561px;
    background: #FFFFFF;
    border: 1px solid #979797;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    align-items: center;

`;

const NameWrraper = styled(Input)`
    width: 270px;
    height: 49px;

    margin-top: 157px;
    margin-bottom: 14px;
`;

const EmailWrraper = styled(Input)`
    width: 270px;
    height: 49px;
    margin-bottom: 14px;
`;

const PassWordWrraper = styled(Input)`
    width: 270px;
    height: 49px;
    margin-bottom: 95px;
`;

const SignUpBtnWrraper = styled.button`
    width: 270px;
    height: 49px;
    background: rgba(249, 249, 249, 0.819434);
    border: 3px solid rgba(151, 151, 151, 0.448665);
    border-radius: 10px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #050505;
`;