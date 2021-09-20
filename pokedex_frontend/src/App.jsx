import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        localStorage.getItem('access_token') && setIsAuthorized(true);
        console.log(isAuthorized);
    }, [isAuthorized]);

    return (
        <>
            <GlobalStyle />
            <Router>
                <Route 
                    exact path='/users/signin' 
                    component={SignInPage}
                />
                <Route 
                    exact path='/main' 
                    component={() => <MainPage
                        isAuthorized={isAuthorized}
                    />}
                />
            </Router>
        </>
    );
}

export default App;