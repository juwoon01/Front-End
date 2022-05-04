import styled, { css } from "styled-components";

export const MOBILE = 480;
export const TABLET = 768;

export const mobileSize = `${MOBILE}px`;
export const tabletSize = `${TABLET}px`;

export const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export const mobileOnly = `
    @media (min-width: ${tabletSize}) {
        display: none;
    }
`;

export const pcOnly = `
    @media (max-width: ${tabletSize}) {
        display: none;
    }
`;

export const ColumnLayout = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowLayout = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Br = styled.br<{pcOnly?: boolean, mobileOnly?: boolean}>`
    ${props => props.pcOnly && pcOnly};
    ${props => props.mobileOnly && mobileOnly};
`;

export const scroll = css`
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #d2d8e4; 
    }
`;
