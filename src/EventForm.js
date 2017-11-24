import React from 'react';
import TextInput from './TextInput';

const EventForm = ({event, onChange, onSave}) => {
    return(
        <form>
            <TextInput name="description" placeholder="Description" value={event.description} onChange={onChange}/>
            <input type="submit" onClick={onSave}/>
        </form>

        <div className="bloco grey dark-med">
            <form className="col" onSubmit={this._handleSubmit.bind(this)}>
                <h3>Add Event</h3>
                <div className="row quadro">
                    <div className="col">
                        <TextInput name="title" placeholder="Name" value={event.title} onChange={onChange}/><br/>
                    </div>
                </div>
                <div className="row quadro">
                    <div className="col">
                        <TextInput name="description" placeholder="Description" value={event.description} onChange={onChange}/><br/>
                    </div>
                </div>
                <div className="row quadro">
                    <div className="col">
                        <input className="quadro" type="submit" onClick={onSave}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EventForm

class EventForm extends Component {

    render() {
        return(
            <div className="bloco grey dark-med">
                <form className="col" onSubmit={this._handleSubmit.bind(this)}>
                    <h3>Add Event</h3>
                    <div className="row quadro">
                        <div className="col">
                            <input placeholder="Name" className="quadro grey dark white-text" ref={ input => this._title = input } /><br/>
                        </div>
                    </div>
                    <div className="row quadro">
                        <div className="col">
                            <textarea placeholder="Description" className="quadro grey dark white-text" ref={ textarea => this._description = textarea }></textarea>
                        </div>
                    </div>
                    <div className="row quadro">
                        <div className="col">
                            <button className="quadro" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();
        let title = this._title.value;
        let description = this._description.value;
        this.props.adicionarEvent(title, description);
    }
}

export default EventForm;
