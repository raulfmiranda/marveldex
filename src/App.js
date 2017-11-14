import React, { Component } from 'react';
import './bluedot.css';
import Topo from './Topo';
import CharacterPage from './CharacterPage';
import EventPage from './EventPage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

    render() {

        return (
            <div className="container box">
                <Topo/>
                <Switch>
                    <Route exact path="/" component={CharacterPage}/>
                    <Route exact path="/events" component={EventPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
