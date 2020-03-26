import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './app/Home.jsx';
import Order from './app/Order.jsx';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Order" component={Order}/>
            </Switch>
        );
    }
}
export default Router;
