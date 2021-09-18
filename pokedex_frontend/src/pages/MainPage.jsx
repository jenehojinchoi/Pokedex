import React from 'react';
import styled from 'styled-components';

const Styled = {
    MainPage : styled.div`
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(2, 1fr);
        width: 100vw;
        height: 100vh;
    `,
};

const MainPage = () => {
    return (
        <Styled.MainPage>
            MainPage!
        </Styled.MainPage>
    );
};

export default MainPage;