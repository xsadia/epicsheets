import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;