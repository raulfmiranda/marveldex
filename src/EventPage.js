import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../src/actions/eventActions';
import {bindActionCreators} from 'redux';
import './bluedot.css';
import eventApi from './api/eventApi';

class EventPage extends Component {

    constructor() {
        super();
    }

    eventRow(event, index) {
        
        let imgUrl = event.thumbnail.path + '/standard_medium.' + event.thumbnail.extension;

        return (
            <div key={index} className="bloco grey dark">
                <div className="row">
                    <div className="col col-img text-center">
                        <div className="col">
                            <img src={imgUrl} alt="Marvel"/>
                        </div>
                    </div>
                    <div className="col col-conteudo">
                        <div className="col text-center">
                            <h3 className="marvel-text">{event.title}</h3>
                        </div>
                        <div className="col">
                            {event.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div classtitle="container box">
                {this.props.events.map(this.eventRow)}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
