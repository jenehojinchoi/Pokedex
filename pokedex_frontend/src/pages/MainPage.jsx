import React from 'react';
import styled from 'styled-components';

const Styled = {
    MainPage : styled.div`
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
    `,
};

const MainPage = ({ isAuthorized }) => {
    return (
        <> {
            isAuthorized 
            ? (
                <Styled.MainPage> MainPage! </Styled.MainPage>
            ) : (
                <Styled.MainPage> Not Authorized </Styled.MainPage>
            )
        } </>
    );
};

export default MainPage;