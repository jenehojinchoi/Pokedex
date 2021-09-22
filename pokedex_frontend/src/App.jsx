import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignPage from './pages/SignInPage';

import MainPage from './pages/MainPage';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        localStorage.getItem('access_token') && setIsAuthorized(true);
    }, [isAuthorized]);

    return (
        <>
            <GlobalStyle />
            <Router>
                <Route 
                    exact path='/users/signin' 
                    component={SignPage}
                />
                <Route 
                    exact path='/users/signup' 
                    component={SignPage}
                />
                <Route 
                    exact path='/main' 
                    component={() => 
                    <MainPage
                        isAuthorized={isAuthorized}
                        likedPage={false}
                    />}
                />
                <Route 
                    exact path='/users/like' 
                    component={() => 
                    <MainPage
                        isAuthorized={isAuthorized}
                        likedPage={true}
                    />}
                />
            </Router>
        </>
    );
}

export default App;
