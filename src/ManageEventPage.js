import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from './actions/eventActions';
import EventForm from './EventForm';

class ManageEventPage extends Component {
    constructor() {
        super();
        this.state = {
            event: Object.assign({}, this.props.event),
            redirect: false
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Manage Event</h1>
                <EventForm event={this.state.event}/>
                <br/><br/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

    let event = { id: '', title: '', description: '' };

    return {
        event: event
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEventPage);