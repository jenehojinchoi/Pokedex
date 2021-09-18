import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Route exact path='/users/signin' component={SignInPage} />
            </Router>
        </>
    );
}

export default App;
