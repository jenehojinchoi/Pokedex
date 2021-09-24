import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignPage from './pages/SignInPage';

import MainPage from './pages/MainPage';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Route 
                    exact path='/' 
                    component={SignPage}
                />
                <Route 
                    exact path='/signup' 
                    component={SignPage}
                />
                <Route 
                    exact path='/main' 
                    component={() => 
                    <MainPage
                        likedPage={false}
                    />}
                />
                <Route 
                    exact path='/like' 
                    component={() => 
                    <MainPage
                        likedPage={true}
                    />}
                />
            </Router>
        </>
    );
}

export default App;
