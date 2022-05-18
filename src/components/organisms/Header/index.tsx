import * as React from 'react';
import styled from 'styled-components';
import { RowLayout } from '../../../themes/layout';
import { useNavigate } from 'react-router-dom';

interface IProps {
    name?: string;
}

const Header = (prop: IProps) =>{
    const navigate = useNavigate();

    const onClickSignIn = ()=>{
        navigate(`/signIn`);
    };

    const onClickSignUp = ()=>{
        navigate(`/signUp`);
    };

    return (
        <HeaderWrapper>
            <Sign>
                <SignIn onClick={onClickSignIn}>
                    {prop.name}
                </SignIn>
                <Seperator/>
                <SignUp onClick={onClickSignUp}>
                    회원가입
                </SignUp>
            </Sign>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled(RowLayout)`
    background: rgba(181, 214, 243, 0.11);
    height: 66px;
    align-items: center;
    justify-content: end;
`;

const Sign = styled(RowLayout)`
    margin-right: 50px;
`;

const SignIn = styled(RowLayout)`
    
`;

const SignUp = styled(RowLayout)`

`;

const Seperator = styled(RowLayout)`
    margin: 0 11px;
    height: 22px;
    width: 1px;
    background: #000000;
`;