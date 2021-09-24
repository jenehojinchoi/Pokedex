import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { MainLayer } from '../components';

const Styled = {
    MainPage : styled.div`
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
    `,
    Grid: styled.div`
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(4, 4fr);
        width: 100vw;
        height: 100vh;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.primary};
    `,
};

const MainPage = ({ likedPage }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        localStorage.getItem('access_token') && setIsAuthorized(true);
    }, [isAuthorized]);

    return (
        <> 
        {
            isAuthorized 
            ? <MainLayer likedPage={likedPage}/>
            : <Styled.MainPage> Not Authorized </Styled.MainPage>
        } 
        </>
    );
};

export default MainPage;