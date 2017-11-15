import React, { Component } from 'react';
import './bluedot.css';
import Event from './Event';
import EventForm from './EventForm';
import jQuery from 'jquery';

class EventPage extends Component {
    componentWillMount() {
        this._buscarEvents();
    }

    constructor() {
        super();
        this.state = {
            events: [
                // {id: 1, title: 'Spider', description: 'O fanstástico homem com teias.'},
                // {id: 2, title: 'SuperMan', description: 'O incrível homem de aço.'}
            ]
        }
    }

    render() {
        const events = this._getEvents();

        return (
            <div classtitle="container box">
                <EventForm adicionarEvent={this._adicionarEvent.bind(this)}/>
                {events}
            </div>
        );
    }

    _buscarEvents() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://gateway.marvel.com/v1/public/events?ts=1&apikey=eb2d792694eb6e3887b538b8a31aae4b&hash=eea377918903899ba83ec96305af1b64',
            success: (json) => {
                let events = json.data.results;
                this.setState({events})
            }
        });
    }

    _excluirEvent(eventId) {
        const events = [...this.state.events];

        for(var i = 0; i < events.length; i++) {
            if(events[i].id === eventId) {
                events.splice(i, 1);
                this.setState({events});
                return true;
            }
        }
        return false;
    }

    _getEvents() {
        return this.state.events.map( event => 
            <Event 
                nome={event.title} 
                descricao={event.description} 
                imgUrl={event.thumbnail.path + '/standard_medium.' + event.thumbnail.extension}
                onDelete={this._excluirEvent.bind(this)} 
                id={event.id}
                key={event.id} />);
    }

    _adicionarEvent(title, description) {
        
        const event = {
            id:this.state.events.length, 
            title:title, 
            description:description,
            thumbnail : {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg'
            }
        };

        this.state.events.unshift(event);
        this.setState({events:this.state.events});
    }
}

export default EventPage;
