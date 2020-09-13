import React from 'react';
import NotLoggedIn from './NotLoggedIn';
import Login from '../Login';
import MakeAccount from './MakeAccount';
import MakeUser from './MakeUser';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function NotLoggedInRouter(props) {
    return (
        <>
            <Switch>

                <Route
                    component={NotLoggedIn}
                    path='/'
                    render={() =>
                        <NotLoggedIn />}
                    exact
                />
                <Route
                    component={Login}
                    path='/login'
                    render={() =>
                        <Login />}
                    exact
                />
                <Route
                    component={MakeUser}
                    path='/new-user'
                    render={() =>
                        <MakeUser />}
                    exact />
                <Route component={MakeAccount} path='/new-account'
                    render={() =>
                        <MakeAccount />}
                    exact />
            </Switch>
        </>
    )
}

export default NotLoggedInRouter
