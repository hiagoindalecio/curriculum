import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Curriculum} path="/curriculum" exact />
        </BrowserRouter>
    );
}

export default Routes;