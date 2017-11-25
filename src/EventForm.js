import React from 'react';
import TextInput from './TextInput';

const EventForm = ({event, onChange, onSave}) => {
    return(
        <div className="bloco grey dark-med">
            {/* <form className="col" onSubmit={this._handleSubmit.bind(this)}> */}
            <form className="col">
                <h3>Add Event</h3>
                <div className="row quadro">
                    <div className="col">
                        {/* <TextInput name="title" placeholder="Name" value={event.title} onChange={onChange}/><br/> */}
                        <TextInput name="title" placeholder="Name" /><br/>
                    </div>
                </div>
                <div className="row quadro">
                    <div className="col">
                        {/* <TextInput name="description" placeholder="Description" value={event.description} onChange={onChange}/><br/> */}
                        <TextInput name="description" placeholder="Description" /><br/>
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

export default EventForm;
