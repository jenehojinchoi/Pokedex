import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Route exact path='/users/signin' component={SignInPage} />
                <Route exact path='/main' component={MainPage} />
            </Router>
        </>
    );
}

export default App;
