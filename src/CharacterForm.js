import React, { Component } from 'react';

class CharacterForm extends Component {

    render() {
        return(
            <div className="bloco grey dark-med">
                <form className="col" onSubmit={this._handleSubmit.bind(this)}>
                    <h3>Add Character</h3>
                    <div className="row quadro">
                        <div className="col">
                            <input placeholder="Name" className="quadro grey dark white-text" ref={ input => this._name = input } /><br/>
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
        let name = this._name.value;
        let description = this._description.value;
        this.props.adicionarCharacter(name, description);
    }
}

export default CharacterForm;
