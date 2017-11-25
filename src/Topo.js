import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Topo extends Component {

    render() {
        return(
            <header>
                <div className="row text-center">
                    <div className="col">
                        <h1 className="marvel-background">Marveldex</h1>
                    </div>
                    <div className="col">
                        <nav id="menu">
                            <ul className="text-center">
                                <li><Link to="/" className="blue dark white-text"> Characters (react) </Link></li>
                                <li><Link to="/events" className="blue dark white-text"> Events (redux) </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Topo;
