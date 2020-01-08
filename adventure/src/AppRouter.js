import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './Components/Register';
import Login from './Components/Login';
import GamePage from './Components/GamePage/GamePage.component';

function AppRouter() {
    return <div>
        <Switch>
            <Route exact path='/register' component = {Register} />
            <Route exact path='/' component = {Login} />
            <Route exact path="/game" component={GamePage} />
        </Switch>
    </div>
}

export default AppRouter 