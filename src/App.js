import React, { Component } from 'react';
import './bluedot.css';
import Character from './Character';
import CharacterForm from './CharacterForm';
import jQuery from 'jquery';

class App extends Component {
    componentWillMount() {
        this._buscarCharacters();
    }

    constructor() {
        super();
        this.state = {
            characters: [
                // {id: 1, name: 'Spider', description: 'O fanstástico homem com teias.'},
                // {id: 2, name: 'SuperMan', description: 'O incrível homem de aço.'}
            ]
        }
    }

    render() {
            const characters = this._getCharacters();

            return (
                <div className="container box">
                    <header>
                        <div className="row text-center">
                            <div className="col">
                                <h1 className="marvel-background">Marveldex</h1>
                            </div>
                            <div className="col">
                                <nav id="menu">
                                    <ul className="text-center">
                                        <li><a href="#" className="blue dark white-text">Characters</a></li>
                                        <li><a href="#" className="blue dark white-text">Comics</a></li>
                                        <li><a href="#" className="blue dark white-text">Creators</a></li>
                                        <li><a href="#" className="blue dark white-text">Series</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <CharacterForm/>
                    {characters}
                </div>
            
        );
    }

    _buscarCharacters() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eb2d792694eb6e3887b538b8a31aae4b&hash=eea377918903899ba83ec96305af1b64',
            success: (json) => {
                let characters = json.data.results;
                this.setState({characters})
            }
        });
    }

    _excluirCharacter(characterId) {
        const characters = [...this.state.characters];

        for(var i = 0; i < characters.length; i++) {
            if(characters[i].id === characterId) {
                characters.splice(i, 1);
                this.setState({characters});
                return true;
            }
        }
        return false;
    }

    _getCharacters() {
        return this.state.characters.map( character => 
            <Character 
                nome={character.name} 
                descricao={character.description} 
                imgUrl={character.thumbnail.path + '/standard_medium.' + character.thumbnail.extension}
                onDelete={this._excluirCharacter.bind(this)} 
                id={character.id}
                key={character.id} />);
    }
}

export default App;
