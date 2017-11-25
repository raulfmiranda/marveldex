import React, { Component } from 'react';
import './bluedot.css';
import Topo from './Topo';
import CharacterPage from './CharacterPage';
import EventPage from './EventPage';
import { Switch, Route } from 'react-router-dom';
import ManageEventPage from './ManageEventPage';

class App extends Component {

    render() {

        return (
            <div className="container box">
                <Topo/>
                <Switch>
                    <Route exact path="/" component={CharacterPage}/>
                    <Route path="/events" component={EventPage}/>
                    <Route exact path="/event" component={ManageEventPage}/>
                    <Route path="/event/:id" component={ManageEventPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
