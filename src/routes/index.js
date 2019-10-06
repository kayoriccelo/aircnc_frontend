import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../apps/SignIn';
import Dashboard from '../apps/Dashboard';
import NewSpot from '../apps/Spot';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/spots/new" component={NewSpot}/>
            </Switch>
        </BrowserRouter>
    );
};
